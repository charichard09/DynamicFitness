import { useFirestore, useFirestoreCollectionData } from 'reactfire';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';

async function Home() {
  // display collection of users
    const firestore = useFirestore();
    const usersCollection = collection(firestore, 'users');

    const { status, data } = useFirestoreCollectionData(usersCollection, { idField: 'id' });

    if (status === 'loading') {
      return <p>Loading...</p>;
    }

    let users = [];
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      users.push(doc.data());
      console.log(doc.id, " => ", doc.data());
    });
    console.log(users);

    return (
      <div>
        <ul>
          {data.map(user => (
            <li key={user.id}>{user.email}</li>
          ))}
        </ul>
        <p>{users.map(user => user.email)}</p>
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