;
import Login from "./views/login/page";
import "./page.scss";
import { GetServerSideProps } from "next";
import Dashboard from "./dashboard/page";


export default function Home() {
  return (
    <div className="page">

       <Login />

    </div>
  );
}

export const getServerSidePropos: GetServerSideProps = async () => {
  return {
    props:{},
  }
}