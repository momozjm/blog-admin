/**
 * Ant Design Pro v4 use `@ant-design/pro-layout` to handle Layout.
 * You can view component api by:
 * https://github.com/ant-design/ant-design-pro-layout
 */
import ProLayout, {
  BasicLayoutProps as ProLayoutProps,
} from '@ant-design/pro-layout';
import React from 'react';

const BasicLayout: React.FC<BasicLayoutProps> = props => {
  const { children } = props;

  return <ProLayout>{children}</ProLayout>;
};

export default BasicLayout;
