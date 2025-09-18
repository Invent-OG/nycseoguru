import team_avatar_1 from "@/assets/img/teamsimg1.jpg";
import team_avatar_2 from "@/assets/img/teamsimg2.jpg";
import team_avatar_3 from "@/assets/img/teamsimg3.jpg";
import team_avatar_4 from "@/assets/img/teamsimg4.jpg";
import team_avatar_5 from "@/assets/img/teamsimg5.jpg";
import team_avatar_6 from "@/assets/img/teamsimg6.jpg";
import team_avatar_7 from "@/assets/img/teamsimg7.jpg";
import team_avatar_8 from "@/assets/img/teamsimg8.jpg";

import { StaticImageData } from "next/image";


interface DataType {
	id: number;
	img: StaticImageData;
	avatar_name: string;
	designation: string;
}

const team_data: DataType[] = [
  {
    id: 1,
    img: team_avatar_1,
    avatar_name: "Sophia Martinez",
    designation: "Project Manager",
  },
  {
    id: 2,
    img: team_avatar_2,
    avatar_name: "Ethan Johnson",
    designation: "UI/UX Designer",
  },
  {
    id: 3,
    img: team_avatar_3,
    avatar_name: "Olivia Carter",
    designation: "Frontend Developer",
  },
  {
    id: 4,
    img: team_avatar_4,
    avatar_name: "Liam Anderson",
    designation: "Digital Marketing Specialist",
  },
  // team data
  {
    id: 5,
    img: team_avatar_5,
    avatar_name: "Ava Thompson",
    designation: "SEO Expert",
  },
  {
    id: 6,
    img: team_avatar_6,
    avatar_name: "Noah Williams",
    designation: "Backend Developer",
  },
  {
    id: 7,
    img: team_avatar_7,
    avatar_name: "Isabella Brown",
    designation: "Content Strategist",
  },
  {
    id: 8,
    img: team_avatar_8,
    avatar_name: "James Wilson",
    designation: "Social Media Manager",
  },
];


export default team_data;
