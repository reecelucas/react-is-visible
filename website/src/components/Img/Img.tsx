import * as React from 'react';
import AspectRatioBox from '../AspectRatioBox/AspectRatioBox';

interface ImgProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
}

interface ImgState {
  src: string;
}

interface ImgPlaceHolderProps {
  reference: React.RefObject<any>;
}

function fetchImageUrl(url: string): Promise<{ src: string }> {
  return new Promise((resolve, reject) => {
    if (!url) {
      reject();
    }

    const image = new Image();
    /**
     * Bind load & error handlers before setting image `src` & `srcset`.
     * Return an object as the resolve value since Promises must only
     * return a single fullfilment value.
     */
    image.onload = () => resolve({ src: url });
    image.onerror = () => reject();

    image.src = url;
  });
}

export const Placeholder = ({ reference }: ImgPlaceHolderProps) => (
  <AspectRatioBox>
    <div className="aspect-ratio__inner" ref={reference} />
  </AspectRatioBox>
);

export class SimpleImage extends React.Component<ImgProps, ImgState> {
  mounted: boolean;

  state = {
    src:
      'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
  };

  componentDidMount() {
    this.mounted = true;
    this.fetchImageSrc();
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  async fetchImageSrc() {
    const { src } = await fetchImageUrl(this.props.src);

    if (this.mounted) {
      this.setState({ src });
    }
  }

  render() {
    const { src, ...rest } = this.props;

    return (
      <AspectRatioBox>
        <img
          className="aspect-ratio__inner img"
          src={this.state.src}
          {...rest}
        />
      </AspectRatioBox>
    );
  }
}
