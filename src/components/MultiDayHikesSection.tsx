
import React from 'react';
import { Trail } from '../types/trail';
import { useLanguage } from '../context/LanguageContext';
import TrailCard from './TrailCard';
import { getTransportIcon } from '../utils/transportationIcons';
import { useIsMobile } from '../hooks/use-mobile';
import { Button } from './ui/button';
import { ExternalLink } from 'lucide-react';

interface MultiDayHikesSectionProps {
  otherMultiDayHikes: Trail[];
  pampLindaHikes: Trail[];
  showSection: boolean;
}

const MultiDayHikesSection: React.FC<MultiDayHikesSectionProps> = ({ 
  otherMultiDayHikes, 
  pampLindaHikes, 
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
      <h2 className={headingClasses}>{t('filterMultiDay')}</h2>
      
      {/* Registration Form Section */}
      <div className="mb-6">
        <div className="flex flex-col items-start">
          <Button
            variant="region"
            className="flex items-center gap-2 uppercase mb-2"
            onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLScL5EuxLZGDb0tOrAsg9Bgm3-C5FFcvpmDncHzSo9NSI3v4sw/viewform', '_blank', 'noopener,noreferrer')}
          >
            {t('registrationFormButton')}
            <ExternalLink size={16} />
          </Button>
          <p className="text-sm text-amber-800">
            {t('registrationFormText')}
          </p>
        </div>
      </div>
      
      {otherMultiDayHikes.length > 0 && (
        <div className="mb-8">
          <h3 className={subheadingClasses}>
            {t('bariloche')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherMultiDayHikes.map((trail) => (
              <TrailCard 
                key={trail.id} 
                trail={trail}
                transportIcons={trail.transportation.map(t => getTransportIcon(t))}
              />
            ))}
          </div>
        </div>
      )}
      
      {pampLindaHikes.length > 0 && (
        <div>
          <h3 className={subheadingClasses}>
            {t('pampLinda')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pampLindaHikes.map((trail) => (
              <TrailCard 
                key={trail.id} 
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

export default MultiDayHikesSection;
