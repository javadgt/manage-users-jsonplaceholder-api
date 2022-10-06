import { createPortal } from "react-dom"

const Portal =  () => {
    return createPortal(
        <h1>react Portal</h1>,
        document.querySelector('#app')
    )
}


export default Portal