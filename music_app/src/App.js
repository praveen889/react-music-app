import { useState, useEffect } from "react";
import Player from "./components/Player";

function App() {
  const [songs] = useState([
    {
      title: "8 Parche",
      artist: "Baani Sandhu Gur Sidhu a",
      img_src: "./images/8 Parche.jpg",
      src: "./music/8 Parche _ Baani Sandhu _ Gur Sidhu _ Gurneet Dosanjh _ Punjabi Song _ White Hill Music.mp3",
    },
    {
      title: "All Black",
      artist: "Sukhe _ Raftaar",
      img_src: "./images/All Black.jpg",
      src: "./music/All Black Full Song _ Sukhe _ Raftaar _  New Video  2015 _ T-Series.mp3",
    },
    {
      title: "Chan Vekhya - Remix",
      artist: "DJ Sumit Rajwanshil",
      img_src: "./images/Chan Vekhya.jpg",
      src: "./music/Chan Vekhya - Remix _ Harnoor _ DJ Sumit Rajwanshi _ SR Music Official _ Latest Remix 2021.mp3",
    },
    {
      title: "Dhokha",
      artist: "Arijit Singh",
      img_src: "./images/Dhokha.jpg",
      src: "./music/Dhokha _ Arijit Singh.mp3",
    },
    {
      title: "Girlfriend - Remix",
      artist: "Jass Manak",
      img_src: "./images/Girlfriend - Remix.jpg",
      src: "./music/Girlfriend - Remix _ Jass Manak _ DJ Sumit Rajwanshi _ SR Music Official _ Latest Remix 2020.mp3",
    },
    {
      title: "Gulu Gulu Rap Song",
      artist: "ZB(Official Music Video)",
      img_src: "./images/Gulu Gulu Rap Song.jpg",
      src: "./music/Gulu Gulu Rap Song - ZB (Official Music Video) Kolkata Hit Rap Song Mera Sona Ka Gaal Pura Gulu Gulu.mp3",
    },
    {
      title: "Bijlee Bijlee",
      artist: "Harrdy Sandhu",
      img_src: "./images/Bijlee Bijlee.webp",
      src: "./music/Harrdy Sandhu - Bijlee Bijlee ft Palak Tiwari _ Jaani _ BPraak _ Arvindr Khaira _ Desi Melodies.mp3",
    },
    {
      title: "Humnava Mere",
      artist: "Jubin Nautiyal",
      img_src: "./images/Humnava Mere.jpg",
      src: "./music/Humnava Mere Song _ Jubin Nautiyal _ Manoj Muntashir _ Rocky Shiv _ Bhushan Kumar _ Rs Traps.mp3",
    },
    {
      title: "Jannat Ve ",
      artist: "Darshan Raval Nirmaan Lijo George",
      img_src: "./images/Jannat Ve.webp",
      src: "./music/Jannat Ve Official Video _ Darshan Raval _ Nirmaan _ Lijo George _ Indie Music Label.mp3",
    },
    {
      title: "SURMA",
      artist: "Jassie Gill",
      img_src: "./images/SURMA.jpg",
      src: "./music/Jassie Gill - SURMA (Official Video) Asees Kaur _ Alll Rounder _ Latest Punjabi Song 2021.mp3",
    },
    {
      title: "Jingle Bell",
      artist: "Hommie Dilliwala Honey Singh",
      img_src: "./images/Jingle Bell.webp",
      src: "./music/Jingle Bell _ Hommie Dilliwala Ft. Yo Yo Honey Singh (Official Video).mp3",
    },
    {
      title: "Kamariya Rap Song",
      artist: "ZB Ft. Janashin Khan",
      img_src: "./images/Kamariya Rap Song.jpg",
      src: "./music/Kamariya Rap Song - ZB Ft. Janashin Khan ( Official Music Video) New India Rap Song -Bollywood Song.mp3",
    },
    {
      title: "Khaab (Lo-fi Mix)",
      artist: "Akhil",
      img_src: "./images/Khaab.jpg",
      src: "./music/Khaab (Lo-fi Mix) - Akhil  _ Lo-fi 2307 _  Punjabi Lofi _ Romantic Lofi 💖.mp3",
    },
    {
      title: "Kusu Kusu",
      artist: "Divya K Tanishk B,Zahrah Khan,Dev N",
      img_src: "./images/Kusu Kusu.webp",
      src: "./music/Kusu Kusu Song Ft Nora Fatehi _ Satyameva Jayate 2 _ John A, Divya K _ Tanishk B, Zahrah Khan, Dev N.mp3",
    },
    {
      title: "Kya Karu",
      artist: "Millind Gaba Feat Ashnoor K",
      img_src: "./images/Kya Karu.jpg",
      src: "./music/Kya Karu (Full Song) Millind Gaba Feat Ashnoor K _ Parampara T _ Asli Gold _ Shabby _ Bhushan Kumar.mp3",
    },
    {
      title: "Nira Ishq - Remix",
      artist: "Guri DJ Sumit Rajwanshi",
      img_src: "./images/Nira Ishq.jpg",
      src: "./music/Nira Ishq - Remix _ Guri _ DJ Sumit Rajwanshi _ SR Music Official _ Latest Remix 2020.mp3",
    },
    {
      title: "Pagla Pagli 3",
      artist: "ZB (Official music video)",
      img_src: "./images/Pagla Pagli 3.jpg",
      src: "./music/Pagla Pagli 3 Rap Song - ZB (Official music video) Kolkata hit rap song 2021-  New Kolkata Rap Song.mp3",
    },
    {
      title: "Pagli Paani Mein",
      artist: "ZB ft. Mars King",
      img_src: "./images/Pagli Paani Mein.jpg",
      src: "./music/Pagli Paani Mein - @Official ZB ft. Mars King (Official Music Video) - Kolkata X Bihar Hit Rap Song.mp3",
    },
    {
      title: "Phulkari",
      artist: "Karan Randhawa",
      img_src: "./images/Phulkari.jpg",
      src: "./music/Phulkari - Karan Randhawa _ DJ Sumit Rajwanshi _ Isha Sharma _ SR Music Official _ Latest Remix 2020.mp3",
    },
    {
      title: "Roll Roll",
      artist: "Kanika Kapoor&Mellow",
      img_src: "./images/Roll Roll.jpg",
      src: "./music/Roll Roll - Kanika Kapoor & Mellow D _ Akull _ Zee Music Originals.mp3",
    },
    {
      title: "Tera Mera Viah-Remix",
      artist: "Jass Manak",
      img_src: "./images/Tera Mera Viah.jpg",
      src: "./music/Tera Mera Viah - Remix _ Jass Manak _ DJ Sumit Rajwanshi _ SR Music Official _ Latest Remix 2021.mp3",
    },
    {
      title: "Waalian - Remix",
      artist: "DJ Sumit Rajwanshi_SR Music Official",
      img_src: "./images/Waalian.webp",
      src: "./music/Waalian - Remix _ Harnoor _ DJ Sumit Rajwanshi _ SR Music Official _ Latest Remix 2020.mp3",
    },
    {
      title: "Khaab - Remix",
      artist: "Akhil _ DJ Sumit Rajwanshi",
      img_src: "./images/Khaab - Remix.jpg",
      src: "./music/Khaab - Remix _ Akhil _ DJ Sumit Rajwanshi _ SR Music Official _ Latest Remix 2020.mp3",
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex, songs.length]);

  return (
    <div className="App">
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
}

export default App;
