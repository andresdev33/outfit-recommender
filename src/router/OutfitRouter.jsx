import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home.jsx";
import OutfitRecommender from "../pages/outfitRecommender/OutfitRecommender.jsx";

const OutfitRouter = () => {
    return <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="outfit-recommender" element={<OutfitRecommender/>}/>
    </Routes>
};

export default OutfitRouter;
