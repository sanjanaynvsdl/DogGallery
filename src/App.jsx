import { useState } from 'react'
import './App.css'
import Card from './Components/Card'

function App() {

  let arr=[1,2,3,3,3,4];
  //we pass the arrays or any values in the form of { } 

  return (
      <div>
       <h1  className='text-sky-200'style={{  textAlign: 'center', margin: '20px 0' }}>
       Paws Up!🐾
       <br></br>🐶Discover Your Next Doggo Companion🐶
</h1>
       <br></br>
       <Card userName = "Golden Retriever" Tag="The Gentle Companion" newArr={arr} image="https://i.pinimg.com/564x/72/16/5c/72165ceeeca312912ad677ead6f82e99.jpg" description="Golden Retrievers are famous for their playful yet calm demeanor. They're excellent with children and make great therapy dogs due to their empathetic and patient personalities."/>
       <Card userName = "Shih tzu" Tag="The Regal Lap Dog" image="https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MjAxMzYxMDYwOTkxODA1Mjcy/shih-tzu-guide.jpg" description=" These dogs were bred to be companions to Chinese royalty, and they still enjoy a life of leisure. They are friendly with everyone and require regular grooming to maintain their luxurious coat."/>
       <Card userName="Rottweiler" Tag="The Loyal Guardian" image="https://i.pinimg.com/564x/e6/c6/f3/e6c6f3e37c35298d2b3607591374ec93.jpg" description="Rottweilers are powerful dogs with a calm and fearless temperament. They excel in obedience and protection work but are also gentle and affectionate with their families."/>
       <Card userName="Labrador Retriever" Tag="The All-Around Friend" image=" https://i.pinimg.com/564x/36/37/85/363785f62617303059801da782ec3c44.jpg" description="Labradors are excellent with children and other animals, making them a great family pet. They are often used in therapy, guide dog work, and field sports due to their intelligence and eagerness to please"/>
       <Card userName="German Shepherd" Tag="The Ultimate Working Dog" image="https://i.pinimg.com/564x/60/f8/4b/60f84bb34305c3c37fc47038d0afc7b0.jpg" description="Known for their loyalty and bravery, German Shepherds are highly trainable and excel in a variety of tasks, from herding to service work, while also being affectionate family pets."/>
       <Card userName='Beagle' Tag=" The Happy Explorer" image="https://i.pinimg.com/564x/9f/a3/e1/9fa3e1b881a50edf2a5c2ddc2edb2a51.jpg" description="Beagles are excellent for families and love to follow scents, often leading to playful mischief. Their playful, gentle nature makes them great companions for children."/>
       <Card userName='Bulldog'Tag=" The Gentle Tough Guy" image="https://i.pinimg.com/564x/3b/98/79/3b98795091b780801424231c7cba7b5d.jpg" description=" Despite their tough appearance, Bulldogs are affectionate and great with kids. They enjoy a laid-back lifestyle and are known for their loyal and easy-going personality."/>
       <Card userName="Poodle" Tag=" The Elegant Performer" image="https://i.pinimg.com/564x/ce/ff/7d/ceff7d3e4f42a750e3933323218fc1a6.jpg" description="Poodles are highly intelligent and versatile, excelling in obedience and agility sports. They are also affectionate companions and adapt well to different living environments."/>
       <Card userName='Husky' Tag=" The Arctic Explorer" image="https://i.pinimg.com/564x/08/76/98/0876982d7a1c29ca365fc84c0731ee78.jpg" description="Huskies are known for their striking wolf-like appearance and endurance. They are social, playful, and thrive in active environments, often enjoying outdoor adventures."/>
       {/* We can re-use this card-component as many times we can */}
       {/* Refer Componentes folder for card */}
      </div>
      
    
  )
}

export default App
