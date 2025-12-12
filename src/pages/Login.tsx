import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/contexts/AuthContext';
import { Gamepad2, Mail, Lock, Zap, ArrowLeft } from 'lucide-react';
import { toast } from 'sonner';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const success = await login(email, password);
      if (success) {
        toast.success('Welcome back, champion!');
        navigate('/dashboard');
      } else {
        toast.error('Invalid credentials. Please try again.');
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      {/* Floating pixels */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary animate-float" />
      <div className="absolute top-40 right-20 w-6 h-6 bg-secondary animate-float" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-accent animate-float" style={{ animationDelay: '1s' }} />

      <div className="w-full max-w-md relative z-10">
        {/* Back button */}
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>

        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-primary flex items-center justify-center">
              <Gamepad2 className="w-7 h-7 text-primary-foreground" />
            </div>
            <span className="font-pixel text-lg text-primary">PixelLearn</span>
          </div>
          <h1 className="font-pixel text-xl text-foreground mb-2">Welcome Back</h1>
          <p className="text-muted-foreground">Enter your credentials to continue</p>
        </div>

        {/* Login Form */}
        <div className="bg-card border-2 border-border p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email
              </label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="player@pixellearn.com"
                required
                className="bg-muted border-2 border-border focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm text-muted-foreground flex items-center gap-2">
                <Lock className="w-4 h-4" />
                Password
              </label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                minLength={4}
                className="bg-muted border-2 border-border focus:border-primary"
              />
            </div>

            <Button 
              type="submit" 
              variant="hero" 
              size="lg" 
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? (
                "Loading..."
              ) : (
                <>
                  <Zap className="w-5 h-5" />
                  Start Playing
                </>
              )}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              New to PixelLearn?{' '}
              <button 
                onClick={() => toast.info('Just enter any email and password to get started!')}
                className="text-primary hover:underline"
              >
                Create an account
              </button>
            </p>
          </div>
        </div>

        {/* Demo hint */}
        <div className="mt-6 bg-muted/50 border border-border p-4 text-center">
          <p className="text-xs text-muted-foreground">
            <span className="text-accent font-pixel">TIP:</span> Enter any email and password (4+ chars) to demo the platform
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
