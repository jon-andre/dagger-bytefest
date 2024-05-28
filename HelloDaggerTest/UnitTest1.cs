namespace HelloDaggerTest;

public class UnitTest1
{
    [Fact]
    public void Test1()
    {
        var result = 1+1;
        Assert.Equal(2, result);
    }
}