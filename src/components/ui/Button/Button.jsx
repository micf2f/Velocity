
export default function Button({ type, action, style, title }) {

    return (
        <button type={type} onClick={action} className={style}> 
            {title} 
        </button>
    )
    
}
