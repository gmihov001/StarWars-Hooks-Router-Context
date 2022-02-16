const getState = ({ getStore, setStore }) => {
	return {
		store: {
			favorites: [],
			characters: sessionStorage.getItem("people") ? JSON.parse(sessionStorage.getItem("people")) : [],
			planets: sessionStorage.getItem("planets") ? JSON.parse(sessionStorage.getItem("planets")) : []
		},
		actions: {
			loadPeople: () => {
				if (!sessionStorage.getItem("people")) {
					fetch("https://swapi.dev/api/people/")
						.then(response => {
							if (!response.ok) {
								throw Error(response.statusText);
							}
							return response.json();
						})
						.then(data => {
							sessionStorage.setItem("people", JSON.stringify(data.results));
						});
				}
			},
			loadPlanets: () => {
				if (!sessionStorage.getItem("planets")) {
					fetch("https://swapi.dev/api/planets/")
						.then(response => {
							if (!response.ok) {
								throw Error(response.statusText);
							}
							return response.json();
						})
						.then(data => {
							sessionStorage.setItem("planets", JSON.stringify(data.results));
						})
						.catch(error => console.log(error));
				}
			},
			addToFavorites: fave => {
				var tempStore = getStore();
				if (!tempStore.favorites.includes(fave)) {
					tempStore.favorites.push(fave);
					setStore({ tempStore });
				}
			},
			deleteFromFavorites: elm => {
				// console.log(elm);
				var { favorites } = getStore();

				setStore({
					favorites: favorites.filter(f => f.entity.name != elm.entity.name)
				});
			},
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
