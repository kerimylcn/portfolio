import React from 'react'
import { Grid, Image, Container,Card,Icon, Divider,Button} from 'semantic-ui-react'
import FirstImage from './../assets/1.png';
import SecondImage from './../assets/2.png';
import ThirdImage from './../assets/3.png';
import FourthImage from './../assets/4.png';

export default function ProjectCard() {
    return (
        <div className="project-container">
            <Container textAlign='center'>
            <h1 className="project-some">Some of my top projects</h1>
             <Grid stackable columns={4}>
    <Grid.Column>
      
      <Card centered className="project-card">
          <Image className="project-image" src={FirstImage} wrapped ui={false} />
    <Card.Content>
      <p className="card-header">Task Management App</p>
      <Divider />
      <p className="card-description">An application to can add tasks, 
        reject them, list them and manage 
        them according to 
        their department.</p>
    </Card.Content>
    <Card.Content extra className="card-button">
    <Button
     onClick={()=> window.location.href="https://kerimylcn.github.io/crosstech/"}
     secondary>LİVE !</Button>
    </Card.Content>
  </Card>
     
    </Grid.Column>
    <Grid.Column>
      
      <Card centered className="project-card">
          <Image className="project-image" src={SecondImage} wrapped ui={false} />
    <Card.Content>
      <p className="card-header">Admin Dasboard</p>
      <Divider />
      <p className="card-description">
      This App admin management panel. With this panel, 
      you can list products, 
      delete them and 
      add new products.
       </p>
    </Card.Content>
    <Card.Content extra className="card-button">
    <Button onClick={()=> window.location.href="https://kerimylcn.github.io/admin-dasboard/"} secondary>LİVE !</Button>
    </Card.Content>
  </Card>
     
    </Grid.Column>
    <Grid.Column>
      
      <Card centered className="project-card">
          <Image className="project-image" src={ThirdImage} wrapped ui={false} />
          <Card.Content>
      <p className="card-header">Shopping Card</p>
      <Divider />
      <p className="card-description">
      This is a shopping cart. You can put the products in the cart, see the total price and delete them from the cart.
       </p>
    </Card.Content>
    <Card.Content extra className="card-button">
    <Button onClick={()=> window.location.href="https://kerimylcn.github.io/shopping-card/"} secondary>LİVE !</Button>
    </Card.Content>
  </Card>
     
    </Grid.Column>
    <Grid.Column>
     
      <Card centered className="project-card">
        <Image className="project-image" src={FourthImage} wrapped ui={false} />
        <Card.Content>
      <p className="card-header">Career Test</p>
      <Divider />
      <p className="card-description">
      A collaborative project with React where you can test your personality traits.
       </p>
    </Card.Content>
    <Card.Content extra className="card-button">
    <Button onClick={()=> window.location.href="http://kariyerharitam.tk/home"} secondary>LİVE ! </Button>
    </Card.Content>
  </Card>
     
    </Grid.Column>
  </Grid>


    


  
  </Container>
        </div>
        
    )
}
