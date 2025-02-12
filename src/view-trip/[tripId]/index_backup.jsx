import { db } from 'service/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'sonner';
import InfoSection from './components/InfoSection';
import Hotels from './components/Hotels';
import PlacesToVisit from './components/PlacesToVisit';
import Footer from './components/Footer';

function ViewTrip() {
    const { tripId } = useParams();
    const [trip, setTrip] = useState(null);

    const GetTripData = async () => {
        try {
            const docRef = doc(db, 'AITrips', tripId);
            const docSnap = await getDoc(docRef);
            console.log("Fetched trip data:", docSnap.data());

            if (docSnap.exists()) {
                console.log("Doc", docSnap.data());
                setTrip(docSnap.data());
            } else {
                console.log("No such Documents");
                toast("No trip Found");
            }
        } catch (error) {
            console.error("Error fetching trip data:", error);
            toast("Error fetching trip data");
        }
    };

    useEffect(() => {
        if (tripId) {
            GetTripData();
        }
    }, [tripId]);

    return (
        <div className='p-10 md:px-20 lg:px-44 xl:px-56'>
            {/* Information Section */}
            <InfoSection trip={trip}></InfoSection>
            {/* Recommended Hotels */}
            <Hotels trip={trip}></Hotels>
            {/* Daily Plan */}
            <PlacesToVisit trip={trip}></PlacesToVisit>
            {/* Footer */}
            <Footer trip={trip}></Footer>
        </div>
    );
}

export default ViewTrip;
