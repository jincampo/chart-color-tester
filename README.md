# Chart Color Palette Tester

A comprehensive tool for testing and previewing color palettes across different chart types and data complexities. Built for designers and developers who need to validate color schemes for data visualization.

## Features

### 🎨 Color Palette Testing
- **Multiple Presets**: Default Pendo, New Proposal 1 & 2, Molly's palette
- **Dynamic Color Count**: Test with 1-10 colors to see how palettes scale
- **Real-time Updates**: Instantly see changes across all chart types

### 📊 Chart Types Supported
- **Line Charts**: Time series data visualization
- **Column Charts**: Categorical data comparison
- **Pie Charts**: Part-to-whole relationships
- **Area Charts**: Stacked metrics over time
- **Mixed Charts**: Combined visualization types
- **Funnel Charts**: Step-based conversion tracking
- **Goal Charts**: Baseline, target, and actual performance
- **People DWM Charts**: Daily/Weekly/Monthly user metrics
- **PES Charts**: Product Engagement Score tracking
- **User Frequency Charts**: Stacked percentage analysis

### 🎛️ Interactive Controls
- **Palette Switcher**: Instantly change between color schemes
- **Color Count Selector**: Choose 1-10 colors to test scalability
- **Responsive Design**: Works on desktop and mobile devices

## Usage

1. **Select a Color Palette**: Use the dropdown to choose from preset palettes
2. **Adjust Color Count**: Select how many colors to display (1-10)
3. **Review Charts**: See how your palette performs across all chart types
4. **Test Interactions**: Hover and click on charts to see interactive states

## Color Palettes

### Default Pendo
- **Standard**: Balanced color scheme optimized for accessibility
- **Light**: Softer variants for subtle data visualization
- **Funnel**: Specialized colors for conversion funnel charts

### New Proposals
- Alternative color schemes with different visual approaches
- Designed for modern data visualization needs

### Molly's Palette
- Custom palette with specific design requirements
- Purple-based color scheme with high contrast options

## Technical Details

- **Framework**: Vanilla JavaScript with Highcharts.js
- **Styling**: CSS with CSS custom properties
- **Icons**: Lucide icon library
- **Responsive**: Mobile-first design approach

## Development

### File Structure
```
chart-color-tester/
├── index.html          # Main HTML structure
├── app.js              # JavaScript application logic
├── styles.css          # CSS styles and responsive design
└── README.md           # Project documentation
```

### Key Components
- **ChartColorTester Class**: Main application controller
- **Color Palette System**: Dynamic color management
- **Chart Factory Methods**: Individual chart creation logic
- **Update Mechanisms**: Real-time chart regeneration

## Browser Support

- Chrome 70+
- Firefox 65+
- Safari 12+
- Edge 79+

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test across all chart types
5. Submit a pull request

## License

This project is part of Pendo's design system tools.
