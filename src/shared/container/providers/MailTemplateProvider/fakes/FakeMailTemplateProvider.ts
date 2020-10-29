import IMailTemplateProvider from '../models/IMailTamplateProvider';
import IParseMailTemplateDTO from '../dtos/IParseMailTemplateDTO';

class FakeMailTemplateProvider implements IMailTemplateProvider {
    public async parse({ template }: IParseMailTemplateDTO): Promise<string> {
        return template;
    }
}

export default FakeMailTemplateProvider;
