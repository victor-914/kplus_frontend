import React, { useState } from "react";
import styled from "styled-components";
// import { NewsBox } from "../../components/accordion/Accordion";
// import { BaseFontSize } from "../../utils/color";
import Head from "next/head";
// import api, { fetcher } from "../../utils/api";
// import Pagination from "../../components/pagination/Pagination";
import useSWR from "swr";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
// import XIcon from '@mui/icons-material/X';
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";

const sections = [
  { title: "Technology", url: "#" },
  { title: "Design", url: "#" },
  { title: "Culture", url: "#" },
  { title: "Business", url: "#" },
  { title: "Politics", url: "#" },
  { title: "Opinion", url: "#" },
  { title: "Science", url: "#" },
  { title: "Health", url: "#" },
  { title: "Style", url: "#" },
  { title: "Travel", url: "#" },
];

const mainFeaturedPost = {
  title: "Title of a longer featured blog post",
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: "https://source.unsplash.com/random?wallpapers",
  imageText: "main image description",
  linkText: "Continue reading…",
};

const sidebar = {
  title: "About",
  description:
    "Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.",
  archives: [
    { title: "March 2020", url: "#" },
    { title: "February 2020", url: "#" },
    { title: "January 2020", url: "#" },
    { title: "November 1999", url: "#" },
    { title: "October 1999", url: "#" },
    { title: "September 1999", url: "#" },
    { title: "August 1999", url: "#" },
    { title: "July 1999", url: "#" },
    { title: "June 1999", url: "#" },
    { title: "May 1999", url: "#" },
    { title: "April 1999", url: "#" },
  ],
  social: [
    { name: "GitHub", icon: GitHubIcon },
    // { name: "X", icon: XIcon },
    { name: "Facebook", icon: FacebookIcon },
  ],
};

const featuredPosts = [
  {
    title: "Featured post",
    date: "Nov 12",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random?wallpapers",
    imageLabel: "Image Text",
  },
  {
    title: "Post title",
    date: "Nov 11",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random?wallpapers",
    imageLabel: "Image Text",
  },
];

// const posts = [post1, post2, post3];

export default function News({ news }) {
  const [currentPage, setCurrentPage] = useState(1);
  // const { data, error, isLoading } = useSWR(
  //   `${process.env.NEXT_PUBLIC_URL}/api/articles?sort[0]=publishedAt:desc&populate[images][fields][0]=*&fields[0]=title&fields[1]=publishedAt&pagination[pageSize]=3&pagination[page]=${currentPage}`,
  //   fetcher,
  //   {
  //     fallbackData: news,
  //   }
  // );

  return (
    <StyledNews>
      <Container 
       sx={{
        width:"80%",
        backgroundColor:"blue"
       }}
      maxWidth="lg">
        <Header title="Blog" sections={sections} />
        <MainFeaturedPost post={mainFeaturedPost} />
        <Grid container spacing={4}>
          {featuredPosts.map((post) => (
            <FeaturedPost key={post.title} post={post} />
          ))}
        </Grid>
        <main className="new_mainContainer">
          <main className="newsContainer">
            {/* {data?.data?.map((item) => ( */}
            <NewsBox
            // key={item?.id} data={item}
            />
            <NewsBox
            // key={item?.id} data={item}
            />{" "}
            <NewsBox
            // key={item?.id} data={item}
            />{" "}
            <NewsBox
            // key={item?.id} data={item}
            />{" "}
            <NewsBox
            // key={item?.id} data={item}
            />
            <NewsBox
            // key={item?.id} data={item}
            />{" "}
            <NewsBox
            // key={item?.id} data={item}
            />{" "}
            <NewsBox
            // key={item?.id} data={item}
            />{" "}
            <NewsBox
            // key={item?.id} data={item}
            />
            {/* ))} */}
          </main>
          <Sidebar
            title={sidebar.title}
            description={sidebar.description}
            archives={sidebar.archives}
            social={sidebar.social}
          />
        </main>
      </Container>

      {/* <Pagination
        data={data?.meta}
        stateIndex={currentPage}
        setstateIndex={setCurrentPage}
      /> */}
    </StyledNews>
  );
}

const NewsBox = (news) => {
  return (
    <StyledNewBox
    // onClick={() => router.replace(`/News/${news?.data?.id}`)
    // }
    >
      <main className="imgCont">
        {/* <Image
          src={news?.data?.attributes?.images?.data?.[0]?.attributes?.url}
          blurDataURL="data:image/webp;base64,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"
          layout="fill"
          quality={50}
        /> */}
      </main>

      <div className="headerCont">
        <header>{news?.data?.attributes?.title}</header>
      </div>
    </StyledNewBox>
  );
};

function Header(props) {
  const { sections, title } = props;

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          {title}
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Button variant="outlined" size="small">
          subscribe
        </Button>
      </Toolbar>
    </React.Fragment>
  );
}

function FeaturedPost(props) {
  const { post } = props;

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="#">
        <Card sx={{ display: "flex" }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              "postdescription"
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              "postdescription"
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {/* {post.description} */}
            </Typography>
            <Typography variant="subtitle1" color="primary">
              Continue reading...
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: "none", sm: "block" } }}
            // image={post.image}
            // alt={post.imageLabel}
          />
        </Card>
      </CardActionArea>
    </Grid>
  );
}

function MainFeaturedPost(props) {
  const { post } = props;

  return (
    <Paper
      sx={{
        position: "relative",
        backgroundColor: "grey.800",
        color: "#fff",
        mb: 4,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url(${post.image})`,
      }}
    >
      {/* Increase the priority of the hero background image */}
      {
        <img
          style={{ display: "none" }}
          src={post.image}
          alt={post.imageText}
        />
      }
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: "rgba(0,0,0,.3)",
        }}
      />
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              position: "relative",
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
            >
              {/* {post.title} */}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              "postdescription"
            </Typography>
            <Link variant="subtitle1" href="#">
              {/* {post.linkTxt} */}
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

const StyledNewBox = styled.div`
  height: auto;
  margin: auto;
  width: 100%;
  margin: 20px 0px 20px 0px;
  display: flex;
  padding: 1px;
  border-radius: 3px;
  height: 120px;
  box-shadow: 1px 1px 3px 2px #19181842;
  background-color: #fff;

  .imgCont {
    width: 150px;
    position: relative;
  }

  .headerCont {
    height: 100%;
    display: flex;
    position: relative;
    flex-direction: column;
    padding-left: 20px;
    align-items: center;
    letter-spacing: 0.3px;
    justify-content: center;
  }

  .headerCont header {
    font-weight: 700;
    text-transform: capitalize !important;
    text-align: justify;
    padding: 5px;
    letter-spacing: -0.6px !important;
    word-spacing: -0.3px !important;
  }

  .headerCont header:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  .headerCont aside {
    top: 2px;
    position: absolute;
    color: #333;
    left: 10px;
    text-transform: capitalize;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    .imgCont {
      width: 30%;
      position: relative;
    }
    .headerCont {
      width: 70%;
      height: 100%;
      padding-left: 1%;
    }

    .headerCont header {
      font-weight: 700;
      text-transform: uppercase;
    }

    .headerCont aside {
      left: 1%;
    }
  }
  @media (min-width: 481px) and (max-width: 768px) {
    .imgCont {
      width: 30%;
      position: relative;
    }
    .headerCont {
      width: 70%;
      height: 100%;
      padding-left: 1%;
    }

    .headerCont header {
      font-weight: 500;
      text-transform: uppercase;
    }

    .headerCont aside {
      left: 1%;
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
  }

  @media (min-width: 1025px) and (max-width: 1200px) {
  }
`;

const StyledNews = styled.section`
  height: auto;
  background-color: #f1f2f3;

  .header_news {
    width: 100%;
    height: 30vh;
    background-image: url("/news_banner.png");
    background-position: 100% 40%;
    background-repeat: no-repeat;
    position: relative;
    background-color: #f3f3f3;
  }

  .new_mainContainer {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .cover {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(23, 32, 48, 0.7);
  }

  .news_header {
    width: 50%;
    height: 100%;
    position: relative;
    margin: auto;
    display: flex;
    text-transform: uppercase;
    align-items: end;
    justify-content: center;
    font-weight: 800;
    color: #fff;
    color: #fff;
  }

  .container {
    width: 80%;
    height: auto;
    margin: auto;
    padding-top: 50px;
    display: flex;
    padding-bottom: 40px;
  }

  .newsContainer {
    width: 65%;
    height: auto;
    margin: auto;
    padding-top: 50px;
  }

  .dontMiss {
    width: 35%;
    height: 100vh;
  }

  .newsSubCont {
    height: auto;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;

    .container {
      width: 100%;
    }

    .newsContainer {
      width: 95%;
      height: auto;
    }
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 100%;

    .container {
      width: 100%;
    }

    .newsContainer {
      width: 95%;
      height: auto;
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
  }

  @media (min-width: 1025px) and (max-width: 1200px) {
  }
`;

// export async function getStaticProps() {
//   try {
//     const initialData = await api.get(
//       "/api/articles?sort[0]=publishedAt:desc&populate[images][fields][0]=*&fields[0]=title&fields[1]=publishedAt&pagination[pageSize]=3&pagination[page]=1"
//     );
//     const news = initialData.data;

//     return {
//       props: {
//         news,
//       },
//       revalidate: 21600,
//     };
//   } catch (error) {
//     return {
//       props: {},
//     };
//   }
// }

export function Sidebar(props) {
  const { archives, description, social, title } = props;

  return (
    <Box
      sx={{
        p: 2,
        bgcolor: "grey.200",

        width: "30%",
      }}
    >
      <Paper elevation={0} sx={{ p: 2, bgcolor: "grey.200" }}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </Paper>
      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        Archives
      </Typography>
      {archives.map((archive) => (
        <Link
          display="block"
          variant="body1"
          href={archive.url}
          key={archive.title}
        >
          {archive.title}
        </Link>
      ))}
      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        Social
      </Typography>
      {social.map((network) => (
        <Link
          display="block"
          variant="body1"
          href="#"
          key={network.name}
          sx={{ mb: 0.5 }}
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <network.icon />
            <span>{network.name}</span>
          </Stack>
        </Link>
      ))}
    </Box>
  );
}
