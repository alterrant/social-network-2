import PersonAvaStyle from './PersonAva.module.css'

function PersonAva(prop) {
    return (
       /* <div className={PersonAvaStyle.parentImg}>
            <img src={prop.img} alt={'profileImg'}/>
        </div>*/
        <img className={PersonAvaStyle.img} src={prop.img} alt={'profileImg'}/>
    )
}

export default PersonAva;