import React from 'react';
import styles from "./base.less";

interface Props {

}

const BaseLayout: React.FC<Props> = props => {

  return (
    <div>
      {props.children}
    </div>
  );
};

export default BaseLayout;
