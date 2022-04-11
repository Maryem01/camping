import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  places: [
    {
      id: 1,
      name: "El Djem Amphitheatre",
      Description:
        " El Jem ou El Djem est une ville tunisienne située aux portes de la région du Sahel. Rattachée administrativement au gouvernorat de Mahdia",
      Visited: 3,
      rate: 2,
      price: 50,
      img: "https://destination-tunis.fr/wp-content/uploads/Entree-amphitheatre-el-Jem.jpg",
    },

    {
      id: 2,
      name: "Carthage",
      Description:
        " Fondée dès le IXe siècle av. J.-C. sur le golfe de Tunis, Carthage établit à partir du VIe siècle un empire commercial s'étendant à une grande partie du monde méditerranéen et fut le siège d'une brillante civilisation. Au cours des longues guerres puniques, elle occupa des territoires de Rome, mais celle-ci la détruisit finalement en 146 av. J.-C. Une seconde Carthage, romaine celle-là, fut alors fondée sur ses ruines.",
      Visited: 5,
      rate: 3,
      price: 75,
      img: "https://whc.unesco.org/uploads/thumbs/site_0037_0001-750-0-20151105154317.jpg",
    },

    {
      id: 3,
      name: "Sousse",
      Description:
        " Sousse est une ville animée où le passé et le présent se rencontrent. Vous pouvez explorer des siècles d'histoire grâce à ses monuments parfaitement conservés et à ses musées. En arpentant les ruelles de la vielle ville, profitez de l'ambiance typique et chaleureuse des médinas des pays du Maghreb avec toute leur authenticité.",
      Visited: 2,
      rate: 2,
      price: 40,
      img: "https://content.r9cdn.net/rimg/dimg/22/6e/d852e28f-city-48786-17178e39356.jpg?crop=true&width=500&height=300&xhint=2329&yhint=1705",
    },

    {
      id: 4,
      name: "El Djem Amphitheatre",
      Description:
        " Cette île d'une superficie de 514 kilomètres carrés est située au sud-est de la Tunisie, près de la frontière de la Libye. C'est une destination prisée, idéale pour se détendre et se divertir.",
      Visited: 0,
      rate: 4,
      price: 100,
      img: "https://www.alibabuy.com/photos/library/1500/23292.jpg",
    },

    {
      id: 4,
      name: "El Djem Amphitheatre",
      Description:
        " Cette île d'une superficie de 514 kilomètres carrés est située au sud-est de la Tunisie, près de la frontière de la Libye. C'est une destination prisée, idéale pour se détendre et se divertir.",
      Visited: 0,
      rate: 4,
      price: 100,
      img: "https://www.alibabuy.com/photos/library/1500/23292.jpg",
    },
  ],

  myList: [],
};

export const PlaceSlice = createSlice({
  name: "place",
  initialState,
  reducers: {
    count: (state, action) => {
      let item = state.places.findIndex((el) => el.id === action.payload);
      state.places[item] = {
        
        ...state.places[item],
        Visited: state.places[item].Visited + 1,
      };
      
    },
    addtoList: (state, action) => {
      state.myList.push(action.payload);
    },
    addnewPlace: (state, action) => {
      state.places.push(action.payload);
    },
  },
});
export const { count, addtoList, addnewPlace } = PlaceSlice.actions;

export default PlaceSlice.reducer;
