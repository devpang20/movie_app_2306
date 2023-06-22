import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { config } from "../constant";

function MovieDetail() {
    
    const param = useParams();

    const [movie, setMovie] = useState();

    useEffect(() => {
        fetch(
            `https://api.themoviedb.org/3/movie/${param.id}?language=ko-KR&api_key=` +
             config.API_KEY
        )
         .then(res => res.json())
         .then(data => {
            console.log(data)
            setMovie(data)
         })
    }, [param.id])

    return ( 
        <Container>
            <Intro>
                <ImgBox className="backdrop">
                    <img src={"https://image.tmdb.org/t/p/original" + movie.backdrop_path} alt="포스터 사진" />
                </ImgBox>
            </Intro>
            <Content>
                <LeftSide>
                    <ImgBox className="poster">
                        <img src={"https://image.tmdb.org/t/p/original" + movie.poster_path} alt="포스터 사진" />
                    </ImgBox>
                </LeftSide>
                <RightSide>
                    <RightSideTop>
                        <Title></Title>
                        <Text>

                        </Text>
                        <Text>
                            
                        </Text>
                        <GenreGroup>
                            <GenreItem></GenreItem>
                        </GenreGroup>
                    </RightSideTop>
                    <RightSideBottom>
                        <BottomTitle></BottomTitle>
                        <BottomText></BottomText>
                    </RightSideBottom>
                </RightSide>
            </Content>
        </Container>  
    );
}

const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Intro = styled.div`
  width: 80%;
`;
const Content = styled.div`
  position: relative;
  display: flex;
  width: 75%;
  align-items: center;
  bottom: 225px;
`;
const LeftSide = styled.div`
  margin-right: 30px;
`;
const RightSide = styled.div``;
const ImgBox = styled.div`
  &.backdrop {
    img {
      width: 100%;
      height: 500px;
      object-fit: cover;
      object-position: 0 35%;
    }
  }
  &.poster {
    img {
      width: 300px;
      border-radius: 10px;
      box-shadow: rgba(0, 0, 0, 0.86) 0px 22px 40px 6px;
    }
  }
`;
const Title = styled.h5`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const TagLine = styled.p``;

const Text = styled.p`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  span {
    display: flex;
    align-items: center;
    gap: 0.2rem;
  }
  &:not(:first-child) {
    margin-bottom: 0.5rem;
  }
`;
const GenreGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin: 1.25rem 0;
`;
const GenreItem = styled.p`
  padding: 0.5rem;
  border: 2px solid white;
  border-radius: 20px;
`;
const RightSideTop = styled.div``;
const RightSideBottom = styled.div`
  margin: 2.5rem 0;
`;

const BottomTitle = styled.h5`
  font-size: 1.6rem;
  margin-bottom: 1.5rem;
`;

const BottomText = styled.p``;

export default MovieDetail;