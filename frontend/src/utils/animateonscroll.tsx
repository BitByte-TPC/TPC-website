import { useEffect, useRef, useState } from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";

type IntersectionObserverCallback = (
  entries: IntersectionObserverEntry[]
) => void;

type Props = {
  children: React.ReactNode;
  reappear?: boolean;
  threshold?: number;
};

type Options = {
  threshold: number;
  reappear?: boolean;
};

const useElementOnScreen = (
  options: Options
): [React.RefObject<HTMLDivElement>, boolean] => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const makeAppear: IntersectionObserverCallback = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) setIsVisible(true);
  };

  const makeAppearRepeating: IntersectionObserverCallback = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  const callBack = options.reappear ? makeAppearRepeating : makeAppear;

  useEffect(() => {
    const containerRefCurrent = containerRef.current;
    const observer = new IntersectionObserver(callBack, options);
    if (containerRefCurrent) observer.observe(containerRefCurrent);

    return () => {
      if (containerRefCurrent) {
        observer.unobserve(containerRefCurrent);
      }
    };
  }, [containerRef, options, callBack]);

  return [containerRef, isVisible];
};

const AnimateOnScroll = ({
  children,
  reappear,
  threshold = 0.3,
}: Props): JSX.Element => {
  const [containerRef, isVisible] = useElementOnScreen({
    threshold: threshold,
    reappear: reappear,
  });

  const useStyles = makeStyles(() =>
    createStyles({
      transitionContainer: {
        opacity: 0,
        transform: "translateY(50px)",
        transition: "opacity 1s ease-in-out, transform 1s ease-in-out",
      },
      visible: {
        opacity: 1,
        transform: "translateY(0px)",
      },
    })
  );

  const classes = useStyles();

  return (
    <>
      <div
        ref={containerRef}
        className={`${classes.transitionContainer} ${
          isVisible ? classes.visible : ""
        }`}
      >
        {children}
      </div>
    </>
  );
};

export default AnimateOnScroll;
