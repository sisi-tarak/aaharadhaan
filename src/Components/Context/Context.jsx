import React, { Component } from "react";
import axios from "axios";
const Context = React.createContext();

export class Provider extends Component {
  handler = (action, newObject) => {
    switch (action) {
      case "ADD_CONTACT":
        this.setState({
          contactme: [newObject, ...this.state.contactme],
        });
        break;
    }
  };

  state = {
    handler: this.handler,

    contactme: [
      {
        id: "",
        name: "",
        email: "",
        subject: "",
        message: "",
      },
    ],

    cards: [
      {
        id: "1",
        title: "Food",
        excerpt:
          "Fight world hunger is as easy as sharing your canned goods......",
        cardImg: "",
        cardPageLink: "/",
      },
      {
        id: "2",
        title: "Organic",
        excerpt:
          " Together, we can reverse this unacceptable trend and improve lives.......!",
        cardImg: "",
        cardPageLink: "/",
      },
      {
        id: "3",
        title: "Donate",
        excerpt:
          " It's not the amount that matters but the meaning behind your donation.......!!",
        cardImg: "",
        cardPageLink: "/",
      },
    ],
    processCards: [
      {
        id: "1",
        processBgImg: "",
        processIcon: "fa-solid fa-bowl-food",
        title: "Food",
        clickLink: "<ModalFood onSubmit={onModalFoodSubmit} />",
      },
      {
        id: "2",
        processBgImg: "",
        processIcon: "fa-solid fa-book-bookmark",
        title: "Books",
      },
      {
        id: "3",
        processBgImg: "",
        processIcon: "fa-solid fa-boxes-packing",
        title: "Clothes",
      },
      {
        id: "4",
        processBgImg: "",
        processIcon: "fa-solid fa-hands-bound",
        title: "Funds",
      },
      {
        id: "5",
        processBgImg: "",
        processIcon: "fa-solid fa-laptop-file",
        title: "Gadgets",
      },
      {
        id: "6",
        processBgImg: "",
        processIcon: "fa-solid fa-heart-pulse",
        title: "Organ",
      },
      {
        id: "7",
        processBgImg: "",
        processIcon: "fa-solid fa-droplet",
        title: "Blood",
      },
      {
        id: "8",
        processBgImg: "",
        processIcon: "fa-solid fa-cart-arrow-down",
        title: "Stationary",
      },
    ],
    donationCards: [
      {
        id: "1",
        donationCardsImg: "fa-solid fa-bowl-food",
        title: "Food",
      },
      {
        id: "2",
        donationCardsImg: "fa-solid fa-heart-pulse",
        title: "Organ",
      },
      {
        id: "3",
        donationCardsImg: "fa-solid fa-droplet",
        title: "Blood",
      },
      {
        id: "4",
        donationCardsImg: "fa-solid fa-hands-bound",
        title: "Funds",
      },
    ],
    donationServices: [
      {
        id: "1",
        donationServicesImg: "fa-solid fa-bowl-food",
        title: "Food Compilation",
        excerpt:
          " Donating food to the worthy people or organizations helps counter poverty, hunger and at the same time, it can improve harmony, friendliness, and trust among residents.",
      },
      {
        id: "2",
        donationServicesImg: "fa-solid fa-book-bookmark",
        title: "Books Mixture",
        excerpt:
          "Books help children make sense of the world around them, impart morals and values to them, teach them empathy, and the difference between right and wrong.",
      },
      {
        id: "3",
        donationServicesImg: "fa-solid fa-hands-bound",
        title: "Funds Collection",
        excerpt:
          " Your donated funds are used to run the year-round programs that support our mission of providing everyday essentials to children in need.",
      },
      {
        id: "4",
        donationServicesImg: "fa-solid fa-heart-pulse",
        title: "Organ Donation",
        excerpt:
          "By Organ Donation, One brain dead donor can save up to eight lives of people suffering from end-stage organ failures. Donation affects more than donors and recipients.",
      },
      {
        id: "5",
        donationServicesImg: "fa-solid fa-droplet",
        title: "Blood Bank",
        excerpt:
          "Blood is essential to help patients survive surgeries, cancer treatment, chronic illnesses, and traumatic injuries. This lifesaving care starts with one person making a generous donation.",
      },
      {
        id: "6",
        donationServicesImg: "fa-solid fa-boxes-packing",
        title: "Clothes Cluster",
        excerpt:
          "By donating old clothes instead of throwing them away, they help conserve the earth's resources and prevent adding unnecessary carbon dioxide to the atmosphere.",
      },
      {
        id: "7",
        donationServicesImg: "fa-solid fa-box",
        title: "Footwear Providing",
        excerpt:
          "Sharing things with needy can make you feel good. This feeling of satisfaction is hard to replicate with any other activity, endeavor or luxury.",
      },
      {
        id: "8",
        donationServicesImg: "fa-solid fa-laptop-file",
        title: "Gadgets Assembling",

        excerpt:
          "Children cannot afford a smart phone or a laptop or any other things and so are bound to depreciate in their learning outcomes or even can drop out of Education.",
      },
      {
        id: "9",
        donationServicesImg: "fa-solid fa-cart-arrow-down",
        title: "Stationary Store",
        excerpt:
          "It benefits the recipient charity or school while the donating organisation also saves costs, reduces waste and their environmental impact, while moving towards net zero targets.",
      },
    ],
    organics: [
      {
        organicImg: "",
        excerpt:
          "Food waste is a major challenge in the present world, tons of food is thrown away in the garbage. We could use all the food waste and prepare a compost out of them which can be used as organic fertilizer. This way we save the earth from the pollution caused by food waste and also do something productive. Food waste is unique as a composting agent, it is the main source of organic matters. Fruits, vegetables, grains, coffee filters, eggshells can be composted.",
      },
      {
        organicImg: "",
        excerpt:
          "From waste to wealth, Guru Angad Dev Veterinary and Animal Sciences University (GADVASU) is making it happen. The university has experimented with recycling food waste, surplus fruit, vegetables and their processing back to the food chain by converting it into animal feed. The use of waste food reduces the cost of animal feed, leading to higher profit for livestock farmers. Mitigation of environmental problems due to the decomposition of such wastes is an additional bonus.",
      },
      {
        organicImg: "",

        excerpt:
          " Nearly 1.3 billion tonnes of food is lost or wasted worldwide each year, with vegetables and fruit making up for almost 45-50 per cent of this loss, presents an opportunity that can bridge the gap for animal feed. Additionally, it will help reduce the negative impact that the lost and waste food causes on environment by reducing part of the carbon footprint. According to experts, recycling strategy is the most sustainable.",
      },
      {
        organicImg: "",
        excerpt:
          " How to prepare the compost: Collect and separate your edible kitchen waste (vegetable peels, fruit peels, small amounts of  wasted cooked food) in a container. Now collect some dry organic matter like dried leaves, sawdust, and wood ash in a small container.Take a big container or earthen pot or a  bucket and drill 4 5 holes around the container at different  levels to let air inside. Now fill the bottom of the container with a layer of soil.",
      },
      {
        organicImg: "",
        excerpt:
          " Now start adding food waste in layers alternating wet waste (food scraps, vegetable, and fruit peels) with dry waste (straw, sawdust, dried leaves). Cover this container with a plastic sheet or a plank of wood to help retain moisture and heat. Check the container every few days and if you think the pile is too dry, sprinkle some water so that it is moist. You can also add wood ash and sawdust to the compost to help speed up the composting process. You need to add some natural waste to your compost like the grass clippings and leaves from your lawn.",
      },
      {
        organicImg: "",
        excerpt:
          " The increasing quantity of food waste generation and the disposal of food waste are major issues in cities and urban areas. Disposal of food waste poses a serious environmental problem worldwide. The landfill of food waste is common practice for its disposal and a large quantity of food waste ends up in landfill. However, food wastes can be used as valuable resources and recycled into new added-value products like compost, biogas through anaerobic digestion, and animal feed.",
      },
    ],
  };

  async componentDidMount() {
    const [
      responseDonationCards,
      responseDonationServices,
      responseProcessCards,
      responseOrganics,
      responseCards,
    ] = await Promise.all([
      axios.get("http://127.0.0.1:9000/api/donation"),
      axios.get("http://127.0.0.1:9000/api/donations"),
      axios.get("http://127.0.0.1:9000/api/donationprocess"),
      axios.get("http://127.0.0.1:9000/api/organics"),
      axios.get("http://127.0.0.1:9000/api/"),
    ]);

    const newState = {};
    if (
      responseDonationCards.data.isSuccessful &&
      responseDonationCards.data.results.length !== 0
    ) {
      newState.donationCards = responseDonationCards.data.results;
    }

    if (
      responseDonationServices.data.isSuccessful &&
      responseDonationServices.data.results.length !== 0
    ) {
      newState.donationServices = responseDonationServices.data.results;
    }

    if (
      responseProcessCards.data.isSuccessful &&
      responseProcessCards.data.results.length !== 0
    ) {
      newState.processCards = responseProcessCards.data.results;
    }

    if (
      responseOrganics.data.isSuccessful &&
      responseOrganics.data.results.length !== 0
    ) {
      newState.organics = responseOrganics.data.results;
    }

    if (
      responseCards.data.isSuccessful &&
      responseCards.data.results.length !== 0
    ) {
      newState.cards = responseCards.data.results;
    }

    this.setState(newState);
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
