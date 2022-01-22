import React from 'react';
import DatePicker from '../../components/DatePicker';
import ImageCard from '../../components/ImageCard';
import './Home.styles.css';

function HomePage() {
  return (
    <div>
      <DatePicker />
      <ImageCard />
    </div>
  );
}

export default HomePage;
