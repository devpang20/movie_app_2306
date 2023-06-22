import styled from "styled-components";
// import { AiFillStar } from "react-icons";

function PosterItem({movie}) {
    return (
        <Container>
            
            <ImgBox>
                <img src={"https://image.tmdb.org/t/p/original/" + movie.backdrop_path } alt="포스터 사진" />
            </ImgBox>
            <Overlay>
                <Title>{movie.original_title}</Title>
                <SubTitle>
                    {movie.release_date} / ⭐ {movie.vote_average}
                    {/* <AiFillStar /> */}
                </SubTitle>
                <Description>{movie.overview.slice(0, 50) + "..."}</Description>
            </Overlay>
        </Container>
    )
}

const Container = styled.div`
  position: relative;
`;

const ImgBox = styled.div`
  /* max-height: 700px; */
  height: calc(100vh - 80px);
  img {
    display: block;
  }
`;

const Overlay = styled.div`
  padding: 80px 40px;
  position: absolute;
  bottom: 0;
  /* transform: translateY(-50%); */
  width: 100%;
  text-align: left;
  background-image: linear-gradient(rgb(0, 0, 0, 0), rgb(0, 0, 0, 1));
`;
const Title = styled.h5`
  font-size: 3.7rem;
`;
const SubTitle = styled.p`
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 20px 0;
`;

const Description = styled.p`
  font-style: italic;
  width: 70%;
`;

export default PosterItem;