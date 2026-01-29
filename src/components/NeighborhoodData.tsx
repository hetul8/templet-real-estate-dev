import { motion } from 'motion/react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp } from 'lucide-react';

interface NeighborhoodDataProps {
  location: string;
}

export function NeighborhoodData({ location }: NeighborhoodDataProps) {
  const priceGrowthData = [
    { year: '2019', price: 85 },
    { year: '2020', price: 88 },
    { year: '2021', price: 95 },
    { year: '2022', price: 105 },
    { year: '2023', price: 118 },
    { year: '2024', price: 132 },
  ];

  const connectivityData = [
    { location: 'International Airport', time: 25 },
    { location: 'Business District', time: 15 },
    { location: 'Shopping Quarter', time: 10 },
    { location: 'Metro Station', time: 5 },
  ];

  const amenitiesData = [
    { category: 'International Schools', count: '15+', distance: '2 km radius' },
    { category: 'Premium Healthcare', count: '8+', distance: '1.5 km radius' },
    { category: 'Fine Dining & Retail', count: '25+', distance: '1 km radius' },
    { category: 'Public Transport', count: '12+', distance: '800 m radius' },
  ];

  return (
    <div className="space-y-24">
      {/* Header */}
      <div>
        <h2 className="serif text-5xl md:text-6xl text-stone-900 mb-6">
          Location Intelligence
        </h2>
        <p className="text-xl text-stone-600">
          Comprehensive analysis of {location}
        </p>
      </div>

      {/* Price Appreciation */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div>
          <div className="w-px h-16 bg-stone-300 mb-8" />
          <h3 className="serif text-3xl text-stone-900 mb-4">Price Appreciation</h3>
          <div className="flex items-baseline gap-3 mb-4">
            <TrendingUp className="w-6 h-6 text-green-600" />
            <span className="serif text-5xl text-stone-900">+55%</span>
          </div>
          <p className="text-stone-600">Growth since 2019</p>
        </div>
        
        <div className="lg:col-span-2">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={priceGrowthData}>
              <CartesianGrid strokeDasharray="0" stroke="#e7e5e4" vertical={false} />
              <XAxis 
                dataKey="year" 
                stroke="#78716c"
                axisLine={false}
                tickLine={false}
                style={{ fontSize: '12px' }}
              />
              <YAxis 
                stroke="#78716c"
                axisLine={false}
                tickLine={false}
                style={{ fontSize: '12px' }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#fafaf9',
                  border: '1px solid #e7e5e4',
                  borderRadius: 0,
                  fontFamily: 'system-ui'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="price" 
                stroke="#1c1917" 
                strokeWidth={2}
                dot={{ fill: '#1c1917', r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Connectivity */}
      <div>
        <div className="w-px h-16 bg-stone-300 mb-8" />
        <h3 className="serif text-3xl text-stone-900 mb-4">Connectivity</h3>
        <p className="text-stone-600 mb-12">Average travel time in minutes</p>
        
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={connectivityData} layout="vertical">
            <CartesianGrid strokeDasharray="0" stroke="#e7e5e4" horizontal={false} />
            <XAxis 
              type="number" 
              stroke="#78716c"
              axisLine={false}
              tickLine={false}
              style={{ fontSize: '12px' }}
            />
            <YAxis 
              dataKey="location" 
              type="category" 
              stroke="#78716c"
              width={180}
              axisLine={false}
              tickLine={false}
              style={{ fontSize: '14px' }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#fafaf9',
                border: '1px solid #e7e5e4',
                borderRadius: 0
              }}
            />
            <Bar dataKey="time" fill="#1c1917" radius={0} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Amenities */}
      <div>
        <div className="w-px h-16 bg-stone-300 mb-8" />
        <h3 className="serif text-3xl text-stone-900 mb-12">Nearby Amenities</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {amenitiesData.map((amenity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border-l border-stone-300 pl-6"
            >
              <div className="serif text-4xl text-stone-900 mb-2">{amenity.count}</div>
              <div className="text-stone-900 mb-1">{amenity.category}</div>
              <div className="text-sm text-stone-500">{amenity.distance}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Investment Analysis */}
      <div className="bg-stone-900 text-white p-16">
        <div className="max-w-4xl">
          <div className="w-px h-16 bg-stone-700 mb-8" />
          <h3 className="serif text-4xl mb-8">Investment Analysis</h3>
          
          <div className="flex items-baseline gap-4 mb-8">
            <span className="serif text-7xl">9.2</span>
            <span className="text-3xl text-stone-400">/10</span>
          </div>
          
          <p className="text-xl text-stone-300 mb-12 leading-relaxed max-w-2xl">
            This location demonstrates exceptional fundamentals with sustained appreciation, 
            premium infrastructure development, and strong demand dynamics.
          </p>
          
          <div className="grid grid-cols-3 gap-8">
            {[
              { label: 'Location Score', value: '9.5' },
              { label: 'Growth Potential', value: '9.0' },
              { label: 'Infrastructure', value: '9.1' }
            ].map((metric, index) => (
              <div key={index}>
                <div className="text-sm text-stone-400 mb-2 tracking-wider">{metric.label}</div>
                <div className="serif text-4xl">{metric.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
