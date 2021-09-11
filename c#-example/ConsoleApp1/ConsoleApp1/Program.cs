using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            int salary = 2000;

            if (salary > 1500)
            {
                salary -= (salary * 10 / 100);
            }
            else
            {
                salary -= (salary * 20 / 100);
           }

            Console.WriteLine(salary);
        }
    }
}
