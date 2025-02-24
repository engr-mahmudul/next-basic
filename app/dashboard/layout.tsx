export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div>
        <div>
            <ul className="flex justify-center gap-5">
                <ul className="py-1 px-3 border-2 border-gray-100 rounded-3xl">Analytics</ul>
                <ul className="py-1 px-3 border-2 border-gray-100 rounded-3xl">Settings</ul>
            </ul>
        </div>
        {children}
      </div>
    );
  }