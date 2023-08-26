import React from "react";
import { useParams } from "react-router-dom";

const Qrcode = () => {
    // const [searchParams] = useSearchParams();
    const {id} = useParams()
    const decodedId = decodeURIComponent(id);
    return <>
     <p>Scan the QR code for details</p>
    <img src={`data:image/png;base64,${decodedId}`} alt="QR CODE" />     
    </>
}

export default Qrcode