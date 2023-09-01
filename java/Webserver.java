import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpServer;

import java.io.IOException;
import java.net.InetSocketAddress;

public class Webserver {
    public static void main(String[] args){
        try {
            HttpServer server = HttpServer.create(new InetSocketAddress(8000), 0);
            server.createContext("/", Webserver::handle);
            server.start();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    private static void handle(HttpExchange httpExchange) {
        try {
            System.out.println(httpExchange.getRequestURI().toString());
            httpExchange.sendResponseHeaders(200, 0);
            httpExchange.close();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}
