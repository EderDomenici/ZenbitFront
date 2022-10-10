import { Footer, Social } from '../style'
import { GoodieG } from '../style'
import Goodie_g from '../assets/Goodie_g.svg'
import social from '../assets/social.svg'
export function MyFooter(){

    return(
        <Footer>
            <GoodieG src={Goodie_g}/>

            <Social src={social} />
        </Footer>
    )
}