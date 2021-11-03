import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/material.dart';
import 'package:project/screens/login_screen.dart';
import 'package:project/screens/register_screen.dart';
import 'package:project/services/auth_service.dart';
import 'package:project/wrapper.dart';
import 'package:provider/provider.dart';
import 'pages/navigation_bar.dart';
import 'pages/constants.dart' as AppColors;

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp();
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MultiProvider(
        providers: [
          Provider<AuthService>(
            create: (_) => AuthService(),
          ),
        ],
        child: MaterialApp(
            theme: ThemeData(
              fontFamily: 'Monsterrat',
              textSelectionTheme: TextSelectionThemeData(
                cursorColor: Color(0xFF131315),
              ),
            ),
            debugShowCheckedModeBanner: false,
            color: Color(0xFFF3F5F7),
            initialRoute: '/',
            routes: {
              '/': (context) => Wrapper(),
              '/login': (context) => LoginScreen(),
              '/register': (context) => RegisterScreen(),
            }));
  }
}


