"""
Zambia Economic Geography Analysis
===================================
Comprehensive visualization of Zambia's spatial economic concentration,
infrastructure gaps, and opportunity zones using the "Grid Standpoint" framework.
"""

import numpy as np
import pandas as pd
import plotly.graph_objects as go
import plotly.express as px
from plotly.subplots import make_subplots
import json

# ============================================================================
# DATA SETUP: Key Economic and Infrastructure Metrics
# ============================================================================

# Major Cities and Economic Hubs
cities_data = {
    'City': [
        # Vertical Axis - Line of Rail (Industrial Spine)
        'Livingstone', 'Lusaka', 'Kabwe', 'Ndola', 'Kitwe', 'Mufulira', 'Chingola',
        # New Copperbelt Extension
        'Solwezi',
        # Eastern Corridor
        'Chipata',
        # Western Neglected
        'Mongu',
        # Northern Neglected
        'Kasama', 'Mansa',
        # Muchinga
        'Chinsali'
    ],
    'Latitude': [
        -17.8419, -15.4167, -14.4469, -12.9585, -12.8024, -12.5431, -12.5289,
        -12.1731,
        -13.6333,
        -15.2667,
        -10.2167, -11.1989,
        -10.5417
    ],
    'Longitude': [
        25.8544, 28.2833, 28.4469, 28.6366, 28.2132, 28.2406, 27.8633,
        26.0890,
        32.6500,
        23.1333,
        31.3833, 28.8906,
        32.0806
    ],
    'GDP_Contribution': [
        # % of national GDP (estimated based on research)
        5, 35, 3, 12, 15, 8, 7,  # Line of Rail
        15,  # Solwezi (New Copperbelt - 64% of copper production)
        4,   # Chipata
        2,   # Mongu
        2, 2,  # Kasama, Mansa
        1    # Chinsali
    ],
    'Electrification_Rate': [
        # % population with grid access
        65, 80, 60, 70, 70, 65, 65,  # Line of Rail urban centers
        60,  # Solwezi
        40,  # Chipata
        15,  # Mongu
        20, 18,  # Kasama, Mansa
        12   # Chinsali
    ],
    'Economic_Type': [
        'Tourism/Logistics', 'Services/Admin/Manufacturing', 'Manufacturing', 
        'Industrial/Manufacturing', 'Mining/Manufacturing', 'Mining/Smelting', 'Mining',
        'Mining (New Copperbelt)',
        'Agriculture/Tourism',
        'Agriculture/Tourism',
        'Agriculture', 'Agriculture/Fisheries',
        'Agriculture'
    ],
    'Grid_Zone': [
        'Vertical', 'Vertical', 'Vertical', 'Vertical', 'Vertical', 'Vertical', 'Vertical',
        'NW Extension',
        'SE Quadrant',
        'SW Quadrant',
        'NE Quadrant', 'NE Quadrant',
        'NE Quadrant'
    ]
}

cities_df = pd.DataFrame(cities_data)

# Provincial Data
provinces_data = {
    'Province': [
        'Lusaka', 'Copperbelt', 'Central', 'Southern',
        'Eastern', 'Western', 'Northern', 'Luapula', 
        'North-Western', 'Muchinga'
    ],
    'Rural_Electrification': [
        25, 20, 8, 12, 6, 3, 4, 5, 8, 4  # % rural access
    ],
    'Grid_Connected': [
        True, True, True, True, False, False, False, False, True, False
    ],
    'Primary_Economy': [
        'Services/Manufacturing', 'Mining/Heavy Industry', 'Mixed', 'Agriculture/Tourism',
        'Agriculture', 'Agriculture/Fisheries', 'Agriculture/Fisheries', 
        'Agriculture/Fisheries', 'Mining', 'Agriculture/Forestry'
    ],
    'Infrastructure_Score': [
        90, 85, 60, 70, 45, 25, 30, 28, 70, 35  # 0-100 scale
    ],
    'Opportunity_Score': [
        40, 30, 50, 60, 75, 85, 80, 80, 60, 90  # Inverse of development
    ]
}

provinces_df = pd.DataFrame(provinces_data)

# Transport Corridors
corridors = {
    'Line of Rail': {
        'points': [
            (-17.8419, 25.8544),  # Livingstone
            (-15.4167, 28.2833),  # Lusaka
            (-14.4469, 28.4469),  # Kabwe
            (-12.9585, 28.6366),  # Ndola
            (-12.8024, 28.2132),  # Kitwe
        ],
        'type': 'Established',
        'priority': 'High',
        'color': '#FFD700'  # Gold
    },
    'New Copperbelt Extension': {
        'points': [
            (-12.8024, 28.2132),  # Kitwe
            (-12.5289, 27.8633),  # Chingola
            (-12.1731, 26.0890),  # Solwezi
        ],
        'type': 'Recent',
        'priority': 'High',
        'color': '#FF8C00'  # Dark Orange
    },
    'Nacala Corridor': {
        'points': [
            (-13.6333, 32.6500),  # Chipata
            (-13.5, 34.0),        # To Malawi border
        ],
        'type': 'Strategic',
        'priority': 'Medium',
        'color': '#4169E1'  # Royal Blue
    },
    'TAZARA': {
        'points': [
            (-14.4469, 28.4469),  # Kapiri Mposhi
            (-12.5, 30.5),        # Northward
            (-10.0, 33.0),        # To Tanzania
        ],
        'type': 'Established',
        'priority': 'Medium',
        'color': '#32CD32'  # Lime Green
    },
    'Lobito Corridor': {
        'points': [
            (-12.1731, 26.0890),  # Solwezi
            (-12.0, 24.0),        # Westward to DRC
            (-12.0, 22.0),        # To Angola
        ],
        'type': 'Future/Strategic',
        'priority': 'Transformative',
        'color': '#FF1493'  # Deep Pink
    }
}

# ============================================================================
# VISUALIZATION FUNCTIONS
# ============================================================================

def create_3d_economic_map():
    """
    Creates the main 3D visualization showing economic concentration
    with vertical bars representing GDP contribution.
    """
    fig = go.Figure()
    
    # Add cities as 3D bars (height = GDP contribution)
    for zone in cities_df['Grid_Zone'].unique():
        zone_data = cities_df[cities_df['Grid_Zone'] == zone]
        
        # Color mapping for zones
        zone_colors = {
            'Vertical': '#FFD700',      # Gold - Industrial Spine
            'NW Extension': '#FF8C00',  # Orange - New Copperbelt
            'SE Quadrant': '#4169E1',   # Blue - Eastern Agriculture
            'SW Quadrant': '#DC143C',   # Crimson - Western Neglected
            'NE Quadrant': '#32CD32'    # Green - Northern Potential
        }
        
        fig.add_trace(go.Scatter3d(
            x=zone_data['Longitude'],
            y=zone_data['Latitude'],
            z=zone_data['GDP_Contribution'],
            mode='markers+text',
            name=zone,
            marker=dict(
                size=zone_data['GDP_Contribution'],
                color=zone_colors.get(zone, '#808080'),
                opacity=0.8,
                line=dict(color='white', width=2)
            ),
            text=zone_data['City'],
            textposition='top center',
            hovertemplate='<b>%{text}</b><br>' +
                          'GDP Contribution: %{z}%<br>' +
                          'Electrification: ' + zone_data['Electrification_Rate'].astype(str) + '%<br>' +
                          '<extra></extra>'
        ))
    
    # Add transport corridors as lines
    for corridor_name, corridor_data in corridors.items():
        points = corridor_data['points']
        lons, lats = zip(*[(p[1], p[0]) for p in points])
        
        fig.add_trace(go.Scatter3d(
            x=lons,
            y=lats,
            z=[0] * len(lons),  # Ground level
            mode='lines',
            name=corridor_name,
            line=dict(
                color=corridor_data['color'],
                width=6 if corridor_data['priority'] == 'Transformative' else 4
            ),
            hovertemplate=f'<b>{corridor_name}</b><br>' +
                          f'Type: {corridor_data["type"]}<br>' +
                          f'Priority: {corridor_data["priority"]}<br>' +
                          '<extra></extra>'
        ))
    
    # Layout
    fig.update_layout(
        title={
            'text': 'Zambia Economic Geography: The Grid Standpoint<br>' +
                    '<sub>Height = GDP Contribution | Color = Economic Zone | Lines = Transport Corridors</sub>',
            'x': 0.5,
            'xanchor': 'center',
            'font': {'size': 20}
        },
        scene=dict(
            xaxis=dict(title='Longitude', backgroundcolor='rgb(230, 230, 230)'),
            yaxis=dict(title='Latitude', backgroundcolor='rgb(230, 230, 230)'),
            zaxis=dict(title='GDP Contribution (%)', backgroundcolor='rgb(230, 230, 230)'),
            camera=dict(
                eye=dict(x=1.5, y=1.5, z=1.2)
            )
        ),
        height=800,
        showlegend=True,
        legend=dict(
            yanchor="top",
            y=0.99,
            xanchor="left",
            x=0.01
        )
    )
    
    return fig

def create_electrification_heatmap():
    """
    Creates a 2D heatmap showing electrification rates across major cities
    """
    # Prepare data for heatmap
    grid_size = 50
    lon_range = np.linspace(22, 34, grid_size)
    lat_range = np.linspace(-18, -8, grid_size)
    
    # Create mesh grid
    lon_grid, lat_grid = np.meshgrid(lon_range, lat_range)
    electrification_grid = np.zeros_like(lon_grid)
    
    # Influence radius for each city (degrees)
    influence_radius = 2.0
    
    # Calculate electrification influence
    for _, city in cities_df.iterrows():
        distances = np.sqrt(
            (lon_grid - city['Longitude'])**2 + 
            (lat_grid - city['Latitude'])**2
        )
        influence = city['Electrification_Rate'] * np.exp(-distances / influence_radius)
        electrification_grid += influence
    
    # Normalize
    electrification_grid = np.clip(electrification_grid, 0, 100)
    
    fig = go.Figure(data=go.Heatmap(
        x=lon_range,
        y=lat_range,
        z=electrification_grid,
        colorscale=[
            [0, '#8B0000'],      # Dark Red - No access
            [0.2, '#DC143C'],    # Crimson
            [0.4, '#FF8C00'],    # Orange
            [0.6, '#FFD700'],    # Gold
            [0.8, '#90EE90'],    # Light Green
            [1.0, '#006400']     # Dark Green - Full access
        ],
        colorbar=dict(title='Electrification<br>Rate (%)')
    ))
    
    # Add city markers
    fig.add_trace(go.Scatter(
        x=cities_df['Longitude'],
        y=cities_df['Latitude'],
        mode='markers+text',
        marker=dict(
            size=cities_df['GDP_Contribution'],
            color='white',
            line=dict(color='black', width=2)
        ),
        text=cities_df['City'],
        textposition='top center',
        name='Economic Hubs',
        hovertemplate='<b>%{text}</b><br>' +
                      'Electrification: ' + cities_df['Electrification_Rate'].astype(str) + '%<br>' +
                      '<extra></extra>'
    ))
    
    fig.update_layout(
        title='Zambia Electrification Coverage: The Great Divide<br>' +
              '<sub>Dark areas = "Bare and Neglected" | Bright areas = Industrial Spine</sub>',
        xaxis_title='Longitude',
        yaxis_title='Latitude',
        height=700,
        showlegend=True
    )
    
    return fig

def create_quadrant_analysis():
    """
    Creates the four-quadrant strategic analysis grid
    """
    quadrants = {
        'NW': {
            'name': 'North-Western<br>(New Copperbelt)',
            'infrastructure': 70,
            'potential': 60,
            'current_gdp': 15,
            'status': 'Emerging Enclave'
        },
        'NE': {
            'name': 'North-Eastern<br>(Bangweulu/Muchinga)',
            'infrastructure': 35,
            'potential': 90,
            'current_gdp': 5,
            'status': 'High Potential,<br>Low Infrastructure'
        },
        'SW': {
            'name': 'South-Western<br>(Liuwa Plain)',
            'infrastructure': 25,
            'potential': 85,
            'current_gdp': 2,
            'status': 'Nature-Based<br>Economy'
        },
        'SE': {
            'name': 'South-Eastern<br>(Chipata Corridor)',
            'infrastructure': 45,
            'potential': 75,
            'current_gdp': 4,
            'status': 'Agriculture Hub,<br>Missing Value-Add'
        }
    }
    
    # Create subplot layout
    fig = make_subplots(
        rows=2, cols=2,
        subplot_titles=list(q['name'] for q in quadrants.values()),
        specs=[[{'type': 'polar'}, {'type': 'polar'}],
               [{'type': 'polar'}, {'type': 'polar'}]],
        vertical_spacing=0.15,
        horizontal_spacing=0.1
    )
    
    positions = [(1,1), (1,2), (2,1), (2,2)]
    colors = ['#FF8C00', '#32CD32', '#DC143C', '#4169E1']
    
    for (quadrant, data), (row, col), color in zip(quadrants.items(), positions, colors):
        categories = ['Infrastructure', 'Economic<br>Potential', 'Current<br>GDP', 'Grid<br>Access']
        values = [
            data['infrastructure'],
            data['potential'],
            data['current_gdp'] * 5,  # Scale up for visibility
            data['infrastructure'] * 0.6  # Proxy for grid access
        ]
        
        fig.add_trace(
            go.Scatterpolar(
                r=values + [values[0]],  # Close the polygon
                theta=categories + [categories[0]],
                fill='toself',
                name=data['status'],
                fillcolor=color,
                opacity=0.6,
                line=dict(color=color, width=2)
            ),
            row=row, col=col
        )
    
    fig.update_layout(
        title={
            'text': 'Four-Quadrant Strategic Analysis: Zambia\'s Economic Geography<br>' +
                    '<sub>Radar charts show Infrastructure vs. Potential in each zone</sub>',
            'x': 0.5,
            'xanchor': 'center'
        },
        height=800,
        showlegend=False,
        polar=dict(radialaxis=dict(range=[0, 100]))
    )
    
    return fig

def create_opportunity_dashboard():
    """
    Creates a comprehensive dashboard showing the opportunity matrix
    """
    fig = make_subplots(
        rows=2, cols=2,
        subplot_titles=(
            'GDP Concentration vs. Electrification',
            'Infrastructure Score by Province',
            'Opportunity Index (Potential - Current Development)',
            'Transport Corridor Strategic Value'
        ),
        specs=[
            [{'type': 'scatter'}, {'type': 'bar'}],
            [{'type': 'bar'}, {'type': 'bar'}]
        ],
        vertical_spacing=0.12,
        horizontal_spacing=0.1
    )
    
    # 1. GDP vs Electrification Scatter
    fig.add_trace(
        go.Scatter(
            x=cities_df['Electrification_Rate'],
            y=cities_df['GDP_Contribution'],
            mode='markers+text',
            marker=dict(
                size=cities_df['GDP_Contribution'] * 3,
                color=cities_df['GDP_Contribution'],
                colorscale='Viridis',
                showscale=True,
                colorbar=dict(x=0.46, len=0.4, title='GDP %')
            ),
            text=cities_df['City'],
            textposition='top center',
            name='Cities'
        ),
        row=1, col=1
    )
    
    # 2. Infrastructure Score by Province
    fig.add_trace(
        go.Bar(
            x=provinces_df['Province'],
            y=provinces_df['Infrastructure_Score'],
            marker=dict(
                color=provinces_df['Infrastructure_Score'],
                colorscale=[[0, '#DC143C'], [0.5, '#FFD700'], [1, '#006400']],
                showscale=False
            ),
            name='Infrastructure'
        ),
        row=1, col=2
    )
    
    # 3. Opportunity Index
    fig.add_trace(
        go.Bar(
            x=provinces_df['Province'],
            y=provinces_df['Opportunity_Score'],
            marker=dict(
                color=provinces_df['Opportunity_Score'],
                colorscale='Reds',
                showscale=False
            ),
            name='Opportunity'
        ),
        row=2, col=1
    )
    
    # 4. Corridor Strategic Value
    corridor_values = {
        'Line of Rail': 90,
        'New Copperbelt': 85,
        'Lobito Corridor': 95,
        'Nacala Corridor': 70,
        'TAZARA': 60
    }
    
    fig.add_trace(
        go.Bar(
            x=list(corridor_values.keys()),
            y=list(corridor_values.values()),
            marker=dict(
                color=['#FFD700', '#FF8C00', '#FF1493', '#4169E1', '#32CD32'],
                showscale=False
            ),
            name='Strategic Value'
        ),
        row=2, col=2
    )
    
    # Update axes
    fig.update_xaxes(title_text='Electrification Rate (%)', row=1, col=1)
    fig.update_yaxes(title_text='GDP Contribution (%)', row=1, col=1)
    fig.update_xaxes(tickangle=45, row=1, col=2)
    fig.update_xaxes(tickangle=45, row=2, col=1)
    fig.update_xaxes(tickangle=45, row=2, col=2)
    fig.update_yaxes(title_text='Score (0-100)', row=1, col=2)
    fig.update_yaxes(title_text='Score (0-100)', row=2, col=1)
    fig.update_yaxes(title_text='Strategic Value', row=2, col=2)
    
    fig.update_layout(
        title_text='Zambia Investment Opportunity Dashboard',
        height=900,
        showlegend=False
    )
    
    return fig

# ============================================================================
# MAIN EXECUTION
# ============================================================================

if __name__ == "__main__":
    print("=" * 80)
    print("ZAMBIA ECONOMIC GEOGRAPHY ANALYSIS")
    print("The Grid Standpoint: Visualizing Concentration and Opportunity")
    print("=" * 80)
    print()
    
    # Generate all visualizations
    print("Creating 3D Economic Map...")
    fig_3d = create_3d_economic_map()
    fig_3d.write_html('/mnt/user-data/outputs/zambia_3d_economic_map.html')
    print("✓ Saved: zambia_3d_economic_map.html")
    
    print("\nCreating Electrification Heatmap...")
    fig_heat = create_electrification_heatmap()
    fig_heat.write_html('/mnt/user-data/outputs/zambia_electrification_heatmap.html')
    print("✓ Saved: zambia_electrification_heatmap.html")
    
    print("\nCreating Quadrant Analysis...")
    fig_quad = create_quadrant_analysis()
    fig_quad.write_html('/mnt/user-data/outputs/zambia_quadrant_analysis.html')
    print("✓ Saved: zambia_quadrant_analysis.html")
    
    print("\nCreating Opportunity Dashboard...")
    fig_dash = create_opportunity_dashboard()
    fig_dash.write_html('/mnt/user-data/outputs/zambia_opportunity_dashboard.html')
    print("✓ Saved: zambia_opportunity_dashboard.html")
    
    print("\n" + "=" * 80)
    print("ANALYSIS COMPLETE")
    print("=" * 80)
    print("\nKey Findings:")
    print(f"1. GDP Concentration: {cities_df[cities_df['Grid_Zone']=='Vertical']['GDP_Contribution'].sum()}% " +
          "along Line of Rail")
    print(f"2. Average Rural Electrification: {provinces_df['Rural_Electrification'].mean():.1f}%")
    print(f"3. Highest Opportunity Provinces: {provinces_df.nlargest(3, 'Opportunity_Score')['Province'].tolist()}")
    print(f"4. Infrastructure Gap: {provinces_df['Infrastructure_Score'].max() - provinces_df['Infrastructure_Score'].min()} points")
    print("\nAll visualizations saved to /mnt/user-data/outputs/")
