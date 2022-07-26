import { TbMapSearch } from "react-icons/tb";
import { TbSearch } from "react-icons/tb";
import { useState } from "react";
import Header from "./components/Header";
import DetailsCard from "./components/DetailsCard";
import SummaryCard from "./components/SummaryCard";

function App() {
    const API_KEY = process.env.REACT_APP_API_KEY;

    const [noData, setNoData] = useState("No Data Yet");
    const [searchTerm, setSearchTerm] = useState("");
    const [weatherData, setWeatherData] = useState([]);
    const [city, setCity] = useState("Unknown location");
    const [weatherIcon, setWeatherIcon] = useState(
      `${process.env.REACT_APP_ICON_URL}10n@2x.png`
    );

    const handleChange = (input) => {
      const { value } = input.target;
      setSearchTerm(value);
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      getWeather(searchTerm);
    };
}

export default App;
