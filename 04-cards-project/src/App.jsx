import Card from "./components/Card";

const App = () => {
  const jobsData = [
    {
      id: 1,
      brandLogo:
        "https://static.vecteezy.com/system/resources/previews/014/018/561/non_2x/amazon-logo-on-transparent-background-free-vector.jpg",
      company: "Amazon",
      posted: "5 days ago",
      post: "Senior UI/UX Designer",
      tag1: "Part Time",
      tag2: "Senior Level",
      pay: "$120/hr",
      location: "Mumbai, India",
    },
    {
      id: 2,
      brandLogo: "https://companieslogo.com/img/orig/GOOG-0ed88f7c.png",
      company: "Google",
      posted: "2 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$95/hr",
      location: "Bangalore, India",
    },
    {
      id: 3,
      brandLogo:
        "https://download.logo.wine/logo/Microsoft_Store/Microsoft_Store-Logo.wine.png",
      company: "Microsoft",
      posted: "1 week ago",
      post: "Backend Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$110/hr",
      location: "Hyderabad, India",
    },
    {
      id: 4,
      brandLogo: "https://pngimg.com/uploads/meta/meta_PNG12.png",
      company: "Meta",
      posted: "3 days ago",
      post: "React Developer",
      tag1: "Contract",
      tag2: "Mid Level",
      pay: "$105/hr",
      location: "Remote",
    },
    {
      id: 5,
      brandLogo:
        "https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
      company: "Apple",
      posted: "6 days ago",
      post: "Product Designer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$130/hr",
      location: "Delhi, India",
    },
    {
      id: 6,
      brandLogo:
        "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
      company: "Netflix",
      posted: "4 days ago",
      post: "UI Designer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$75/hr",
      location: "Remote",
    },
    {
      id: 7,
      brandLogo:
        "https://www.pngplay.com/wp-content/uploads/13/Tesla-Logo-PNG-HD-Quality.png",
      company: "Tesla",
      posted: "1 week ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$115/hr",
      location: "Karachi, Pakistan",
    },
    {
      id: 8,
      brandLogo:
        "data:image/png;base64,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",
      company: "Uber",
      posted: "2 days ago",
      post: "Mobile App Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$90/hr",
      location: "Lahore, Pakistan",
    },
    {
      id: 9,
      brandLogo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAO4AAACUCAMAAACjieW3AAAAwFBMVEX/WmD/////Wl79W2H/WGH/V138////Wlz9W1////z++Pn4UVf4ycryYGT4iIz8W2Px2dv3wcPy0ND8gIT/UVj96uv64uL5bHP63+T3SVH+REvrVFr+V1f88vDrnp/rXWLtf4LteHvtR03xsLH+TFDuUl/qi5Dzkpnvqa73W2nxxczxubn0b3Pza2vuiYjym5b86/TwmJvuQkTtUlP4qKvnaXHpXWz22NHxTVn2wrv7Y1/teIP1dH73nanrcXH76+Q06/2uAAALI0lEQVR4nO1cC3fauBKWRpIlWzYGV0Dc2EBiyqMQumy4e7N9pP//X+2MDN1sd7M99/ZBzdF3etJgk3P0Ma9vpDGMBQQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBHwt5OkXc85V/BggRSkA/C8Gzr2a7wshQAMY/IdMjZTmogkjVwbKzcuynFdao5kv250laPdq0QzSZvnKai3ll/+ky5DSTmoecc7jerW+dLpQTV9zYhsR4+JRGX2xsSsFU3cF0uTD0Wjo/x8ruFC6khnD8g0atm5m27vHFREubs+9rO8GYbRdYtzWO6EUODsbIfU37tzL+k4wQqpxymO+mIMQUoLb1RH/mF1msgKQxu6TKCpKElRKSlmSZzfluVf2XYDqSY0xT9VjIdDQgqTVdMij4Y2ianzu5X1zCFbtMTltHIijcIRyhTVpYzGJXV5+ljLD3ITGBDQtXQAmrzE7D1+oXItzr+6bA+YTNG6TazgmJ4xmN0HzNiZXl5ev9O0v3rjanJQjRu89GfxR5ZfnzOWBR3Fjses7NkHowKAWFM42v6Q2ECjzKkzDfPToVYW3JVYiplRW4IewVWde4TcFiByYbZKYt0UWJQa0uRjD903M+aC8IOMijFHvKUqnx5wkiSlyxRvUMyTTyzKvFvaQRHxVUthSzJKJGcicabdPMHovSVoZpsm4UZ0p7V+D1tgkGCMF9n8Zmff9BZkXrWgPmIEnpReLSrFs+tsU2yJJDu3Nm15QI4ipadtHtXyPXRGSHO/TYZIkxWErlJZS5UXE6xuHZfhCxIbS3rgONJNvl5izUEthQv7lkFVSgzfvAKvxZaRnMMqr5TsptTZNwo+I0IdfMfwErvvUGFXsMqwL2pFaXhkDopwkaNfhZrnfkJExJQsm3I5H0cZcCF0Gv5KgwuSrJSVovrnTVSXG3s4zh59CSY0R3r+MvgiNG/ODQrFsG2qK5kogVLmvoyjFiguOlHMD3W/yNdXc9TBC4zrMRSSh6l/pLAx1tLpPMSXfYTnSOV1/rLpuXbKXdgfMwhtJKWuGXruZn1JwuUqipOcwgTHa52iqrseuQLGkfVrGyDRMzWrOd/Z0cOAWNUe6KLP0mOpy1nVpJZRhWFZpQwowdj3dntPtTbA7pLt0UghtaVtj1XXlLMGwdcHjhDpaEI7oHhwcT+/tsnVmgdLqEV3gl7zj5jXAHHKizWQfu9srzvtz2e5dyDJFD8ZKRKnLrhL6JM694K9DDrRdwfnUC2cM4wGP4gc0J4av8LdG99j5Il29HfF4eE0+cO5F/98AliuMT16UvsmVTFHXu6zQyfG1W9Z/drpAJTmZlAbyzlZfDFIx8NKJCYMNj3QvsBJdVTSkIFROt26O/gt2W/OoyM674K+EUI8YkoWg0kPby2BRWSTLuUH1YSlv9eeiTVsA8wGKjr3LdXerr3QbHsc7BX7TRkPuemjD/lQZpddk3IVryaG91SO+TrMu04UpxmqR+a1Hlmuds9uU9JMV7Q5zv8rZ6QAlL5F/3XPdZYsSg/N4fyovtPXoHuuID3uVGlNvtKtO75Qmd+/pk3gyUtc5UGXtP912A6DDBF7c4R3scXP16fgApLlFJVmMuztopa4xGw3yJ1cAmEFS8Yoa/qute1Jkc1NN2kOkH77ObwSVYS39TCoZ9Q6TdU0zGnsL5jRZZTCTVTf49pnsNt2JfaobBDbxFNCcRwMrxGn3EQwWZvWe6KrOCmdPd/8nXfDObO43RLe4xZIj5bEbxB4fqBTVs86yZephFEUDgfoY/BAZAPZ6Qt4VtAs5elH5a+1bUWCC3PvYPe+avwKolDAzbxXGp6Fdc5kL0O4ujfy269V7mgE9JmIQuZB90hkd3m52PQperYHGmP30MnPTfhTxfp8y841TNErHmLe7exfz6KA7fLItcz+M4LTfU0Vppcv/YMvLRzdT4juanQ520d+ra9rBe6E6LCKZ22FWGv3m/E4VgCvf1BS2N8xlfXLo5vYkGt30v2j1lZXdpYtC2TYx6chpjon37XjxkWrQ6zsnjLoeUH6u39zlCmvPdE9Tzum9gg4PHQmsRRs/ybtpDqvNkAyabF750qTyw0fKWcO0OTQbdPEoLjLygs5alwksNNmq5k9OwYq9PclEu0s/3UJHrn/PlKAz7vOu+SuAfZ1RpjdI/Dg+um4xGVtNn4K/67LFJ8JJusgxc2P67ixdOs+lgfx8Nhn0+/30Qy+zSmpzZIvhbLPZ0t86zDJLj53ILp+LAZoK+3qpKpOvc4YJGunn8jgjZ7TJVVVpkV/nWilsiUh7ie7GrsS1Aw2MYc4irUHTNhLMyYCSYUPkx8nID/yDY/iW7qrIFsbvJHv4FuFf3go0xv4j1vR9YIicBtKI7QX/SNyzbxc0oNHd7Qz/dAmdAbGj8JfUEsjn5lvbxwM7HLuSMm1VWn0yL7Db27J6xoDaPjzIDs82U2ExdlkcUEC0V6D8vSgmz9DNNkV/37G6a/y4I/iHcw1mWevHph6Mz1OSvcQeqbhmPoExmirDwNZAbgCKDrXbndfuPBvo6yYyaVdsTEnPDg0zLEYIAy9RHafXsiVkjtQwpIGeREG6KyWPuzzdADXxwrTlx2BWcgdUxGlbclFYtHRpvJceG6MfPneRpRk1hY0ib+7OCJ30T5sz383jwnOV7YtmrI7lFsiZU4EO7A/JDH4AKLsEOYNUnq7WAB3yZmnIj1WJGdjp+dxpNRfzijk3V658uPV0S7x72w4tzMu5o1el0n4gpXGW/rIzzkxZSt2+SIejYn+3avZv1x9Wh7Varpp3i2JYrEcRfz1Lr4bFIldGrlfNctsMh/1matvYfZcO8d5DV6Qk5ZxtSr0ttvL0iO4Yu/qexSs0FDhcX/nLfut1ptXMnyj4DnAx9+NGbT843GKnD/LnV1johX4eA2nQI9gjopv06Bw7iuq6yK48t9pzfz/fEe/YM67frvvt3yUtXzojPTebLwJF7yGOeH+yWG7qJ3R5VG+Wi16JsZsU+8U+pXP90m/dHRa7Ab5aIt0oLpaLfRFjgFvsF35+ulJvaaJmPK+sHfyFbnrrKvUSnbk/dZVb0ybW44zH8XLu3PaKRxsabB6s8V6WxjTALjvQLkjtRwEdFtPyA49G2090B6Vgrcy4R8P5sZQFHfq9qFCDoLO/vqbMXKHGcjc1T/ZO/kvz9LMAZA/X+kjzGDS2/SddPph7ERl5VWVU9ppHq8cT3UHEi6mXGTnT+iXNilrowJ6zpHETvtXoiHYSP3FmPigZGIrd9Br7eDUuIt7SdUyLlKT0kS7Ih49R0liQP385An2DpmlKZdQcc9Zf6WJHNMIgvtda2X19cmaH7D/RtUroObYV9c6JDnxFjJbrlA4OMmu3RfQ5XYaxG40Wr2zeQ25J9u4zutFVz9ishy7w8U51YVvSSD8YmBSDlL4p4m90MXb5MN2k9LUZjZt9bl0+/H1TUBk+zI3ogHKWTNsmJvFAEwn8H6xLmir2JwqZ2v2N7vG4YSPoMLQDdDWTlrwxipKCf06XOqJo5B+qSVZvlTpZlwYkPd3iI7GtJ5XODYgONAqUXpxcNs1karIsE8r/yLOsnTjCV/k1Ngx77AmwP6Sb1PD5+/jC3n9YrfbruYHOtLyMHrhAaEVnmez0o60q9Avexe7QP7D89DKTSmHbq2z3xri/EHXP3PbbWUaB6NixJ43ZPFtGaM8K/onQUSSLzn3FoEYvhee+eovO/kD/w10a0aETXsE6oJafwm88PuuQ8rmDPtluY/r9+ICAgICAgICAgICAgICAgICAgICAgICAgICAgP8RfwCmebXi7PpZrQAAAABJRU5ErkJggg==",
      company: "Airbnb",
      posted: "1 day ago",
      post: "UX Researcher",
      tag1: "Contract",
      tag2: "Senior Level",
      pay: "$125/hr",
      location: "Remote",
    },
    {
      id: 10,
      brandLogo: "https://companieslogo.com/img/orig/ADBE-fb158b30.png",
      company: "Adobe",
      posted: "3 days ago",
      post: "Graphic Designer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$70/hr",
      location: "Mumbai, India",
    },
  ];

  return (
    <div className="Parent">
      {jobsData.map(function (elem, idx) {
        return <div key={idx}>
          <Card
            key={idx}
            brandLogo={elem.brandLogo}
            companyname={elem.company}
            posted={elem.posted}
            post={elem.post}
            tag1={elem.tag1}
            tag2={elem.tag2}
            pay={elem.post}
            location={elem.location}
            />
            </div>
      })}
    </div>
  );
};

export default App;
