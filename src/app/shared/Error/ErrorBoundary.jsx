import React, { useEffect, useState } from "react";
import ErrorFallbackPage from "./ErrorFallbackPage";

export default class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
  
      // Initialize the state to keep track of errors
      this.state = {
        hasError: false,
        error: undefined,
      };
    }
  
    // Update the component state when an error occurs
    static getDerivedStateFromError(error) {
      // Specify that the error boundary has caught an error
      return {
        hasError: true,
        error: error,
      };
    }
  
    // Log the error to some sort of a service logger
    componentDidCatch(error, errorInfo) {
      console.log("Error caught!");
      console.error(error);
      console.error(errorInfo);
    }
  
    render() {
      // If an error occurred, render an error message
      if (this.state.hasError) {
        return <ErrorFallbackPage error={this.state.error?.message || ""} />;
      } else {
        // Default behavior: render the child components
        return this.props.children;
      }
    }
  }
  