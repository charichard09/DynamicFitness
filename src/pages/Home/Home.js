import { IonButton, IonActionSheet } from '@ionic/react';

function Home() {
  return (
    <div style={{ "backgroundColor": "RGB(255, 205, 41)", "height": "100vh" }}>
      <h3 style={{margin: 0}}>Home</h3>
      <p>This is our home.</p>
      <IonButton id="open-action-sheet">Open</IonButton>
      <IonActionSheet
        trigger="open-action-sheet"
        header="Actions"
        buttons={[
          {
            text: 'Delete',
            role: 'destructive',
            data: {
              action: 'delete'
            }
          },
          {
            text: 'Share',
            data: {
              action: 'share'
            }
          },
          {
            text: 'Cancel',
            role: 'cancel',
            data: {
              action: 'cancel'
            }
          }
        ]}
      ></IonActionSheet>
    </div>
  );
}

export default Home;