import "./Post.scss";
import { useNavigate } from "react-router-dom";

const Post = ( {posts, id } ) => {
    const navigate = useNavigate();
    return (
        <div className="main-dv">
        <div className="nws">
            <h1>Our Latest News</h1>
        <div className="blog-pags">
        <div className="blog-cards"
        >
            {posts?.data?.slice(0, 3).map((item) => (
                <div
                    key={item.id}
                    id={item.id}
                    data={item.attributes}
                >
                    <img onClick={() => navigate(`/post/${item.id}`)}
                        src={
                            process.env.REACT_APP_DEV_URL +
                            item.attributes.img.data.attributes.url
                        }
                    />
                    <h4 className="title-blg" onClick={() => navigate(`/post/${item.id}`)} >{item.attributes.title}</h4>
                    <p onClick={() => navigate(`/post/${item.id}`)} >{item.attributes.stDes}</p>

                </div>
            ))}
        </div>
    </div>
    </div>
    </div>
    );
};

export default Post;
