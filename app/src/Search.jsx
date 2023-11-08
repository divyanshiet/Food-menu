import styled from "styled-components"
import { BASE_URL } from "./App"
export default function Search({ data }) {
    return (
        <>
            <Cardsection>
                <Card>
                        {
                            data?.map((it) =>
                            (
                                    <Foodcard>
                                        <div className="img">
                                            <div className="image">
                                                <img src={BASE_URL + it.image}></img>
                                            </div>
                                            <div className="about" key={it.type}>
                                                <div className="nt">
                                                <div className="nm" >{it.name}</div>
                                                <div className="cont">{it.text}</div>
                                                </div>
                                                <div className="pr">
                                                <div><button>${it.price}</button></div>
                                                </div>
                                            </div>
                                        </div>
                                    </Foodcard>
                            ))
                        }
                </Card>
            </Cardsection>
        </>
    )
}

const Cardsection = styled.div`
min-height: calc(100vh - 172px);
background-size: cover;
background-image: url("./bgimg.png");
`
const Card = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 32px;
    margin-left: 8%;
    padding: 25px;
`
const Foodcard = styled.div`
display: flex;
    flex-wrap: wrap;
    .img
    {
        width: 340px;
        height: 167px;
        flex-shrink: 0;
        display: flex;
        border-radius: 19.447px;
        border: 0.659px solid #98F9FF;
        background: url(<path-to-image>), lightgray 0% 0% / 50.8334219455719px 50.8334219455719px repeat, radial-gradient(151.92% 127.02% at 15.32% 21.04%, rgba(165, 239, 255, 0.20) 0%, rgba(110, 191, 244, 0.04) 77.08%, rgba(70, 144, 212, 0.00) 100%);
        background-blend-mode: overlay, normal;
        backdrop-filter: blur(13.184196472167969px);
    }
    .about
    {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 10px;
    }
    .pr button
    {
        width: 40px;
        padding: 2px;
        background-color: red;
        border: 1px solid red;
        border-radius: 5px;
        padding: 5px;
        align-items: end;
    }
    .nm
    {
        font-size: 16px;
        font-weight: 600;
    }
    .cont
    {
        font-size: 15px;
        color: black;
    }
`