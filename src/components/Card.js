import { useState } from 'react';
import { Card, Skeleton, Modal } from 'antd';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

const { Meta } = Card;

const MyCard = (props) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    
    return (
        <>
            <Card style={{ width: '95%', marginTop: 16 }} actions={[<button className="btn btn-light" onClick={showModal}><SportsEsportsIcon key="play" fontSize="large"/> Play Game</button>]} cover={<img alt="example" src={props.thumbnail} style={{ objectFit: 'cover', height: '300px' }}/>}>
                <Skeleton loading={props.loading} active>
                    <Meta title={props.title}/>
                    <div className="row my-2">
                        <Meta description={`Genre: ${props.genre}`}/>
                    </div>
                    <div className="row my-2">
                        <Meta description={`Platform: ${props.platform.toUpperCase()}`}/>
                    </div>
                    <div className="containter my-2">
                        <div className="row justify-content-around align-items-center" style={{fontSize: "20px"}}>
                            <div className="col">
                            </div>
                            <div className="col">
                            </div>
                        </div>
                        <div className="row.text-center mt-2">
                            Release: {`\t`}{props.releaseDate}
                        </div>
                    </div>
                </Skeleton>
            </Card>
            <Modal mask={true} bodyStyle={{height:'100%', width:'100%', display:"flex"}} title={props.title} open={isModalOpen} onCancel={handleCancel} footer={null} centered={true}>
                <iframe width={'900'} height={'400'} src={props.url} title={props.description} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </Modal>
        </>
    );
};
export default MyCard;