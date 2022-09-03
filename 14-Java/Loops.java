import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.IntStream;


public class Loops 
{
    public void forEach() 
    {
        int[] primes = { 2, 3, 5, 7, 11, 13 };
        for (int p : primes) 
        {
            System.out.println(p);
        }
    }
    Listof(2,3,5,7,11,13).forEach(System.out::println)
    Arrays.stream(primes).forEach(System.out::println);

    private int getValue()
    {
        System.out.println("Called here");
        return 20;
    }

    public String readFirstLineFromFile(String path) throws IOException
    {
        FileReader fr = null;
        BufferedReader br = null;

        try {
            fr = new FileReader(path);
            br = new BufferedReader(fr);
            return br.readLine();
        }
        catch (IOException e)
        {
            e.printStackTrace();
        }
        finally 
        {
            if (br != null)
            {
                try{
                    br.close();
                }
                catch (IOException e)
                {
                    e.printStackTrace();
                }
            }
            if (fr != null) 
            {
                try {
                    fr.close();
                } 
                catch (IOException e) 
                {
                    e.printStackTrace();
                }
            }
        }
        return "";

    }

    public static void main(String[] args)
    {
       

    }
}
