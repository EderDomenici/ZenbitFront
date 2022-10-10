import { useState } from 'react'
import axios from 'axios'


import { Map,GoodieY2, GoodieY, GoodieP, GoodieP2, Cloud, Cloud2, Cloud3, Cloud4, Cloud5, Cloud6, Cloud7, Cloud8, Cloud9, Cloud10, Form, Section, Div, DivMap} from '../style'



import map from '../assets/map.svg'
import Goodie_y from '../assets/Goodie_y.svg'
import Goodie_p from '../assets/Goodie_p.svg'
import Goodie_y_2 from '../assets/Goodie_y_2.svg'
import cloud from '../assets/cloud.svg'


export function Feedback(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    function hendleSubmit(e){
      if(!name || !email || !message){
        alert('Please fill all fields')
        setName('')
        setEmail('')
        setMessage('')
      }else{

          axios.post('https://challangezenbitapi.herokuapp.com/feedback',{name,email,message})
            .then(
                (response)=>{
                    if(response.status === 201){
                        alert('Thank You')
                        setName('')
                        setEmail('')
                        setMessage('')
                    }
                }
            )
      }

      e.preventDefault();

    }




    return(
        <Section>

            <Form >
                <div>
                    <h1>Reach out to us!</h1>
                </div>
                <form onSubmit={hendleSubmit}>
                    <div>
                        <input type="text" placeholder='Your name*' value={name} onChange={(e)=> setName(e.target.value)}/>
                    </div>

                    <div>
                        <input type="email" placeholder='Your e-mail*' value={email} onChange={(e)=> setEmail(e.target.value)}/>
                    </div>

                    <div>
                        <textarea cols="30" rows="10" placeholder='Your message*' value={message} onChange={(e)=> setMessage(e.target.value)}></textarea>
                    </div>
                
                    <button type="submit">Send Message</button>
                </form>
            </Form >


            <Div> 
                <GoodieY src={Goodie_y} />

                <GoodieY2 src={Goodie_y_2} />
                <GoodieP2 src={Goodie_p} />


                <GoodieP src={Goodie_p} />

                <Cloud src={cloud} />
                <Cloud2 src={cloud} />
                <Cloud3 src={cloud} />
                <Cloud4 src={cloud} />
                <Cloud5 src={cloud} />
                <Cloud6 src={cloud} />
                <Cloud7 src={cloud} />
                <Cloud8 src={cloud} />
                <Cloud9 src={cloud} />
                <Cloud10 src={cloud} />
            </Div>

            <DivMap>
                <Map src={map} alt='map' />
            </DivMap>

        </Section>

    )
}

