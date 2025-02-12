
import PropTypes from 'prop-types';
import PlaceCardItem from './PlaceCardItem';

function PlacesToVisit({ trip }) {
    return (
        <div>
            <h2 className='font-bold text-lg mt-10'>Place to Visits</h2>
            <div>
                {trip?.tripData?.itinerary.map((item, index) => (
                    <div className='mt-5' key={index}>
                        <h2 className='font-medium text-lg'>Day {item.day}</h2>
                        <div className='grid md:grid-cols-2 gap-5'>
                            {item.plan.map((place, index) => (
                                <div className='' key={index}>
                                    <h2 className='font-medium text-sm text-orange-600'>{place.time}</h2>
                                    <PlaceCardItem place={place}></PlaceCardItem>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

PlacesToVisit.propTypes = {
    trip: PropTypes.shape({
        tripData: PropTypes.shape({
            itinerary: PropTypes.arrayOf(
                PropTypes.shape({
                    day: PropTypes.number,
                    plan: PropTypes.arrayOf(PropTypes.object)
                })
            )
        })
    })
};

export default PlacesToVisit;
