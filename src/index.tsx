import * as React from 'react';
const PropTypes = require('prop-types');

type ElementRef = React.RefObject<any>;

interface RenderPropArgs {
  isVisible: boolean;
  elementRef: ElementRef;
}

interface IsVisibleProps {
  children: (args: RenderPropArgs) => React.ReactNode;
  isVisible?: boolean;
  once?: boolean;
  root?: string;
  rootMargin?: string;
  threshold?: number;
}

interface IsVisibleState {
  isVisible: boolean;
}

export default class IsVisible extends React.PureComponent<
  IsVisibleProps,
  IsVisibleState
> {
  static propTypes = {
    children: PropTypes.func.isRequired,
    isVisible: PropTypes.bool,
    once: PropTypes.bool,
    root: PropTypes.string,
    rootMargin: PropTypes.string,
    threshold: PropTypes.number
  };

  /**
   * To keep the TypeScript compiler happy, we need to use the non-null
   * assertion operator when referencing default props (defaultProp!).
   * See: https://bit.ly/2KFNS2r & https://bit.ly/2JyKWEP.
   */
  static defaultProps: Partial<IsVisibleProps> = {
    once: false,
    rootMargin: '0px 0px 0px 0px',
    threshold: 0
  };

  private observer: IntersectionObserver | null;
  private elementRef: ElementRef;

  constructor(props: IsVisibleProps) {
    super(props);

    this.state = {
      isVisible: this.props.isVisible || false
    };

    this.observer = null;
    this.elementRef = React.createRef();
    this.onEntry = this.onEntry.bind(this);
  }

  public componentDidMount() {
    if (!('IntersectionObserver' in window)) {
      this.setState({ isVisible: true });
      return;
    }

    if (!this.state.isVisible) {
      this.observe();
    }
  }

  public componentWillUnmount() {
    this.destroyObserver();
  }

  /**
   * Since we need greater flexibility (and support) than the Ref forwarding
   * API affords us, we're relying on the following approach to pass refs to
   * child component DOM nodes: https://bit.ly/2OVOJPM.
   */
  public render() {
    return this.props.children({
      elementRef: this.elementRef,
      isVisible: this.state.isVisible
    });
  }

  private destroyObserver() {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
  }

  private setObserverRoot(): HTMLElement | null {
    if (typeof this.props.root === 'string') {
      return document.querySelector(this.props.root);
    }

    return null;
  }

  private onEntry(entries: IntersectionObserverEntry[]) {
    entries.forEach(entry => {
      if (
        entry.isIntersecting &&
        entry.intersectionRatio > this.props.threshold!
      ) {
        this.setState({ isVisible: true });

        if (this.props.once!) {
          // We can stop observing now that the component is visible
          this.destroyObserver();
          return;
        }
      } else {
        this.setState({ isVisible: false });
      }
    });
  }

  private observe() {
    this.observer = new IntersectionObserver(this.onEntry, {
      root: this.setObserverRoot(),
      rootMargin: this.props.rootMargin!,
      threshold: this.props.threshold!
    });

    if (!this.elementRef.current) {
      throw new Error(
        'elementRef must be bound to a DOM element. See: #section-of-readme'
      );
    }

    this.observer.observe(this.elementRef.current);
  }
}
