import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "@/hooks/use-auth";
import { NotificationProvider } from "@/hooks/use-notifications";
import MainLayout from "./components/layout/MainLayout";
import HomePage from "./pages/home-page";
import PropertiesPage from "./pages/properties-page";
import PropertyDetails from "./pages/property-details";
import AdminPage from "./pages/admin-page";
import AuthPage from "./pages/auth-page";
import NotFound from "./pages/not-found";
import SubmitPropertyPage from "./pages/submit-property-page";

function Router() {
  return (
    <MainLayout>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/properties" component={PropertiesPage} />
        <Route path="/property/:id" component={PropertyDetails} />
        <Route path="/submit-property" component={SubmitPropertyPage} />
        <Route path="/auth" component={AuthPage} />
        <Route path="/admin" component={AdminPage} />
        <Route path="/admin/properties" component={AdminPage} />
        <Route path="/admin/submissions" component={AdminPage} />
        <Route component={NotFound} />
      </Switch>
    </MainLayout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <NotificationProvider>
          <Router />
          <Toaster />
        </NotificationProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;