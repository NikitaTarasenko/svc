import React from "react";
import PageError from "../../pages/PageError";

export class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      // Обновить состояние с тем, чтобы следующий рендер показал запасной UI.
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      // Можно также сохранить информацию об ошибке в соответствующую службу журнала ошибок
      console.log(error, errorInfo);
    }
  
    render() {
      if (this.state.hasError) {
        return <PageError/>;
      }
  
      return this.props.children; 
    }
  }