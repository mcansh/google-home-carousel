import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0,
      xDown: null,
      yDown: null,
    };
  }

  setActive = e => {
    const { carouselId } = e.target.dataset;
    const id = parseFloat(carouselId);
    this.setState({ active: id });
  };

  handleTouchStart = e => {
    const { clientX: xDown, clientY: yDown } = e.touches[0];

    this.setState({ yDown, xDown });
  };

  handleTouchMove = e => {
    const count = this.props.items.length - 1;
    const { xDown, yDown, active } = this.state;
    let id = active;

    if (!xDown || !yDown) return;

    const { clientX: xUp, clientY: yUp } = e.touches[0];

    const xDiff = xDown - xUp;
    const yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {
        // left swipe
        id -= 1;
      } else {
        // right swipe
        id += 1;
      }
      if (id > count) {
        id = 0;
      } else if (id < 0) {
        id = count;
      }
      this.setState({ active: id });
    }
    // reset values
    this.setState({ xDown: null, yDown: null });
  };

  render() {
    const { title, items, activeColor } = this.props;
    return (
      <div>
        <h1>{title}</h1>
        <div className="carouselItems">
          {items.map((item, i) => (
            <div
              key={i}
              data-carousel-id={i}
              className={`carouselItem ${i === this.state.active
                ? 'active'
                : ''}`}
              onTouchStart={this.handleTouchStart}
              onTouchMove={this.handleTouchMove}
            >
              <div className="carouselItemHeader">
                <div className="carouselItemIcon" />
                <h2>{item.title}</h2>
              </div>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
        <div className="carouselNav">
          {items.map((item, i) => (
            <span
              key={i}
              data-carousel-id={i}
              className={`${i === this.state.active ? 'active' : ''}`}
              onClick={this.setActive}
            />
          ))}
        </div>
        <style jsx>{`
          .carouselItem {
            visibility: hidden;
            height: 0;
            opacity: 0;
            margin: 0;
            will-change: visibility, height, opacity;
          }

          .carouselItem.active {
            margin-bottom: 20px;
            height: auto;
            opacity: 1;
            visibility: visible;
          }

          .carouselItemHeader {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            cursor: pointer;
            -webkit-tap-highlight-color: transparent;
          }

          @media (max-width: 799px) {
            .carouselItemHeader {
              justify-content: center;
            }
          }

          p {
            will-change: opacity;
            margin-left: 50px;
            color: rgba(0, 0, 0, 0.6);
            font-size: 0.9rem;
            opacity: 0;
            height: 0;
            pointer-events: none;
            font-size: 18px;
            transition: 300ms opacity ease-in-out;
            visibility: hidden;
          }

          @media (max-width: 799px) {
            p {
              text-align: center;
              max-width: 500px;
              margin: 20px auto 0 auto;
            }
          }

          .active p {
            opacity: 1;
            height: 100%;
            pointer-events: auto;
            visibility: visible;
          }

          .carouselNav {
            display: flex;
            justify-content: center;
            align-content: center;
          }
          span {
            width: 30px;
            height: 2px;
            border-radius: 2px;
            padding: 10px 0;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            margin-left: 5px;
          }

          span::after {
            content: '';
            height: 100%;
            width: 100%;
            background: #ccc;
            display: inline-flex;
          }
          span.active::after {
            background: ${activeColor};
          }
        `}</style>
      </div>
    );
  }
}

export default Carousel;
