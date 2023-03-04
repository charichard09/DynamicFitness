import { useFirestore, useFirestoreCollectionData } from 'reactfire';
import { collection } from 'firebase/firestore';


function Home() {
  // display collection of users
    const firestore = useFirestore();
    const usersCollection = collection(firestore, 'users');

    const { status, data } = useFirestoreCollectionData(usersCollection, { idField: 'id' });

    if (status === 'loading') {
      return <p>Loading...</p>;
    }

    return (
      <div>
        <ul>
          {data.map(user => (
            <li key={user.id}>{user.email}</li>
          ))}
        </ul>
      </div>
    );
  }

  // return (
  //   <div style={{ "backgroundColor": "RGB(255, 205, 41)", "height": "100vh" }}>
  //     <h3 style={{margin: 0}}>Home</h3>
  //     <p>This is our home.</p>
  //   </div>
  // );
// }

export default Home;