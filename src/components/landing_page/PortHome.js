import React from 'react';
import img1 from '../../medias/Picnic_Romantique.jpeg';
import img2 from '../../medias/Picnic_Dejeuner.jpeg';
import img3 from '../../medias/Sunday_BBQ.jpeg';
import img4 from '../../medias/Picnic_1an.jpeg';
import img5 from '../../medias/Picnic_Nature.jpeg';
import './PortHome.scss';
import { NavLink } from 'react-router-dom';

const slides = [
  {
    id: 1,
    subtitle: "Romantique",
    image: img1,
    link: '/portfolio'
  },
  {
    id: 2,
    subtitle: "Brunch",
    image: img2,
    link: '/portfolio'
  },
  {
    id: 3,
    subtitle: "Sunday BBQ",
    image: img3,
    link: '/portfolio'
  },
  {
    id: 4,
    subtitle: "Convivial",
    image: img4,
    link: '/portfolio'
  },
  {
    id: 5,
    subtitle: "Nature",
    image: img5,
    link: '/portfolio'
  }
];
/* onMouse Fonction */
function useTilt(active) {
    const ref = React.useRef(null);
  
    React.useEffect(() => {
      if (!ref.current || !active) {
        return;
      }
  
      const state = {
        rect: undefined,
        mouseX: undefined,
        mouseY: undefined
      };
  
      let el = ref.current;
  
      const handleMouseMove = (e) => {
        if (!el) {
          return;
        }
        if (!state.rect) {
          state.rect = el.getBoundingClientRect();
        }
        state.mouseX = e.clientX;
        state.mouseY = e.clientY;
        const px = (state.mouseX - state.rect.left) / state.rect.width;
        const py = (state.mouseY - state.rect.top) / state.rect.height;
  
        el.style.setProperty("--px", px);
        el.style.setProperty("--py", py);
      };
  
      el.addEventListener("mousemove", handleMouseMove);
  
      return () => {
        el.removeEventListener("mousemove", handleMouseMove);
      };
    }, [active]);
  
    return ref;
  }
  

  const initialState = {
    slideIndex: 0
  };
  
  /* Passer aux slides suivants */
  const slidesReducer = (state, event) => {
    if (event.type === "NEXT") {
      return {
        ...state,
        slideIndex: (state.slideIndex + 1) % slides.length
      };
    }
    if (event.type === "PREV") {
      return {
        ...state,
        slideIndex:
          state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1
      };
    }
  };

  function Slide({ slide, offset }) {
    const active = offset === 0 ? true : null;
    const ref = useTilt(active);
  
    return (
      <div
        ref={ref}
        className="slide"
        data-active={active}
        style={{
          "--offset": offset,
          "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1
        }}
      >
        <div
          className="slideBackground"
          style={{
            backgroundImage: `url('${slide.image}')`
          }}
        />
        <div
          className="slideContent"
          style={{
            backgroundImage: `url('${slide.image}')`
          }}
        >
          <NavLink to={slide.link}>
          <div className="slideContentInner">
            <h2 className="slideTitle">{slide.title}</h2>
            <h3 className="slideSubtitle">{slide.subtitle}</h3>
            <p className="slideDescription">{slide.description}</p>
          </div>
          </NavLink>
        </div>
      </div>
    );
  }
    
const PortfHome = () => {
    const [state, dispatch] = React.useReducer(slidesReducer, initialState);

  return (
    <div className="portHome">
      <h1>Découvrez nos créations ! </h1>
      <div className="slides">
        <button onClick={() => dispatch({ type: "NEXT" })}>‹</button>

        {[...slides, ...slides, ...slides].map((slide, i) => {
          let offset = slides.length + (state.slideIndex - i);
          return <Slide slide={slide} offset={offset} key={i} />;
        })}
        <button onClick={() => dispatch({ type: "PREV" })}>›</button>
      </div>
    </div>
  );
}
    
    export default PortfHome;
    
