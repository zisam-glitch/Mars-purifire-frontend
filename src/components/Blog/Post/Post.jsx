import "./Post.scss";
import { useNavigate } from "react-router-dom";

const Post = ( {posts, id } ) => {
    const navigate = useNavigate();
    return (
        <div className="blog-pag">
        <div className="blog-card"
        >
            {posts?.data?.map((item) => (
                <div
                    key={item.id}
                    id={item.id}
                    data={item.attributes}
                >
                    <img onClick={() => navigate(`/post/${item.attributes.slug}`)}
                        src={
                            process.env.REACT_APP_DEV_URL +
                            item.attributes.image.data.attributes.url
                        }
                    />
                    <h4 className="title-blg" onClick={() => navigate(`/post/${item.attributes.slug}`)} >{item.attributes.title}</h4>
                    <p onClick={() => navigate(`/post/${item.attributes.slug}`)} >{item.attributes.stDes}</p>

                </div>
            ))}
        </div>
    </div>
    );
};

export default Post;
