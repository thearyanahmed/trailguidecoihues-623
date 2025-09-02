
import React from 'react';
import { Trail } from '../types/trail';
import { useLanguage } from '../context/LanguageContext';
import TrailCard from './TrailCard';
import { getTransportIcon } from '../utils/transportationIcons';
import { useIsMobile } from '../hooks/use-mobile';

interface DayHikesSectionProps {
  directAccessHikes: Trail[];
  otherDayHikes: Trail[];
  showSection: boolean;
}

const DayHikesSection: React.FC<DayHikesSectionProps> = ({ 
  directAccessHikes, 
  otherDayHikes, 
  showSection 
}) => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();

  if (!showSection) {
    return null;
  }

  const headingClasses = isMobile 
    ? "text-3xl font-bold text-black mb-6 text-center" 
    : "text-3xl font-bold text-black mb-6";

  const subheadingClasses = isMobile 
    ? "text-2xl font-semibold text-forest-light mb-4 border-l-4 border-forest pl-3 text-center" 
    : "text-2xl font-semibold text-forest-light mb-4 border-l-4 border-forest pl-3";

  return (
    <div className="mb-12">
      <h2 className={headingClasses}>{t('filterDayHike')}</h2>
      
      {otherDayHikes.length > 0 && (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherDayHikes.map((trail) => (
              <TrailCard 
                key={`bus-${trail.id}`} 
                trail={trail}
                transportIcons={trail.transportation.map(t => getTransportIcon(t))}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DayHikesSection;
